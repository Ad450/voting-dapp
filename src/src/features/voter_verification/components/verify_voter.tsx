import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  PinInput,
  PinInputField,
  Stack,
  HStack,
  Box,
  Button,
  CircularProgress,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { AppStrings, UIError } from "../../../core/failures";
import {
  verifyCode,
  getVerificationCode,
} from "../datasources/remote_datasource";

const VerifyVoter = () => {
  const [email, setEmail] = useState("");
  const [isVerifyCode, setIsVerifyCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleOnChange = (e: any) => setEmail(e.target.value);

  const verifyOtp = async (code: string) => {
    try {
      await verifyCode(email, code);
    } catch (error: unknown) {
      if (error instanceof UIError) {
        setError(error.message);
      } else {
        setError(AppStrings.apiGenericError);
      }
    }
  };

  const getOtp = async () => {
    try {
      await getVerificationCode(email);
    } catch (error: unknown) {
      if (error instanceof UIError) {
        setError(error.message);
      } else {
        setError(AppStrings.apiGenericError);
      }
    }
  };

  return (
    <Box width="container.xl">
      <Stack>
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
        <CustomPinField onComplete={verifyOtp}></CustomPinField>
        {!loading ? (
          // will replace sent Otp with verify otp once the user has received the otp
          isVerifyCode ? (
            <Box></Box>
          ) : (
            <Button colorScheme="red" variant="outline" onClick={getOtp}>
              Send code
            </Button>
          )
        ) : (
          <CircularProgress value={30} color="orange.400" thickness="12px" />
        )}

        <Text>{error}</Text>
      </Stack>
    </Box>
  );
};

const CustomPinField = (props: any) => {
  return (
    <HStack>
      <Box paddingTop="30">
        <PinInput otp onComplete={props.onComplete}>
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
