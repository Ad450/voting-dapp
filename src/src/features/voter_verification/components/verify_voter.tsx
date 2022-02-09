import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  PinInput,
  PinInputField,
  VStack,
  HStack,
  Box,
  Button,
  CircularProgress,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { AppStrings, UIError } from "../../../core/failures";
import Validator from "../../../core/utils/validators";
import {
  verifyCode,
  getVerificationCode,
} from "../datasources/remote_datasource";

const VerifyVoter = () => {
  const [email, setEmail] = useState("");
  const [isVerifyCode, setIsVerifyCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [pin, setPin] = useState("");
  const handleOnChange = (e: any) => setEmail(e.target.value);

  const verifyOtp = async (code: string) => {
    setLoading(true);
    try {
      await verifyCode(email, code);
    } catch (error: unknown) {
      if (error instanceof UIError) {
        setError(error.message);
      } else {
        setError(AppStrings.apiGenericError);
        setLoading(false);
      }
    }
  };

  const getOtp = async () => {
    if (Validator.validateEmail(email)) {
      //debugging with prints for now
      console.log("entered get otp");

      setLoading(true);
      try {
        await getVerificationCode(email);
        setIsVerifyCode(true);
      } catch (error: unknown) {
        if (error instanceof UIError) {
          setError(error.message);
        } else {
          setError(AppStrings.apiGenericError);
          setLoading(false);
        }
      }
    }
  };

  const onPinChange = async (value: string) => {
    setPin(value);
  };

  return (
    <Box width="container.xl">
      <VStack>
        <Box width="fit-content">
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={handleOnChange}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </Box>
        <CustomPinField
          onComplete={verifyOtp}
          onChange={onPinChange}
        ></CustomPinField>
        {!loading ? (
          // will replace sent Otp with verify otp once the user has received the otp
          isVerifyCode ? (
            <Button
              colorScheme="red"
              variant="outline"
              onClick={() => verifyOtp(pin)}
            >
              Send code
            </Button>
          ) : (
            <Button
              colorScheme="red"
              variant="outline"
              onClick={() => getOtp()}
            >
              VerifyCode
            </Button>
          )
        ) : (
          <CircularProgress value={30} color="orange.400" thickness="12px" />
        )}

        <Text>{error}</Text>
      </VStack>
    </Box>
  );
};

const CustomPinField = (props: any) => {
  return (
    <HStack>
      <Box paddingTop="30">
        <PinInput otp onComplete={props.onComplete} onChange={props.onChange}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </Box>
    </HStack>
  );
};

export { VerifyVoter };
