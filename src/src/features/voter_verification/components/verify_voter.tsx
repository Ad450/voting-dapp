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
  Flex,
  Heading,
  useColorMode,
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
  const { toggleColorMode } = useColorMode();

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
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" bg="gray.900" p={12} rounded={6}>
        <Heading mb={6}>Let's verify your email</Heading>
        <Input
          placeholder="adjei@gmail.com"
          variant="filled"
          mb={2}
          type="email"
        ></Input>
        <CustomPinField></CustomPinField>
        <Button mt={3}>Send Otp</Button>
        <Button onClick={toggleColorMode}>toggle color</Button>
      </Flex>
    </Flex>
  );
};

const CustomPinField = (props: any) => {
  return (
    <HStack>
      <Box paddingTop="30">
        <PinInput
          otp
          onComplete={props.onComplete}
          onChange={props.onChange}
          mask
        >
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
