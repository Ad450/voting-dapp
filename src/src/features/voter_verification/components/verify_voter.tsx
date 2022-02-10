import {
  Input,
  PinInput,
  PinInputField,
  HStack,
  Box,
  Button,
  Text,
  Flex,
  Heading,
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

  const verifyOtp = async (): Promise<void> => {
    setLoading(true);
    try {
      await verifyCode(email, pin);
    } catch (error: unknown) {
      if (error instanceof UIError) {
        setError(error.message);
        setLoading(false);
      } else {
        setError(AppStrings.apiGenericError);
        setLoading(false);
      }
    }
  };

  const getOtp = async (): Promise<void> => {
    //debugging with prints for now
    console.log("entered get otp");
    console.log(email);

    if (Validator.validateEmail(email)) {
      setLoading(true);
      try {
        const result = await getVerificationCode(email);
        if (result) {
          setLoading(false);
          setIsVerifyCode(true);

          alert("an otp code has been sent to your email");
        }
      } catch (error: unknown) {
        if (error instanceof UIError) {
          setError(error.message);
          setLoading(false);
        } else {
          setError(AppStrings.apiGenericError);
          setLoading(false);
        }
      }
    } else {
      setError("enter a valid email");
    }
  };

  const onPinChange = async (value: string) => {
    setPin(value);
  };

  console.log(pin);

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" bg="gray.900" p={12} rounded={6}>
        <Heading mb={6}>Let's verify your email</Heading>
        <Input
          placeholder="adjei@gmail.com"
          variant="filled"
          mb={2}
          type="email"
          value={email}
          onChange={handleOnChange}
        ></Input>
        <CustomPinField onChange={onPinChange}></CustomPinField>
        {isVerifyCode ? (
          <Button onClick={verifyOtp}>Verify code</Button>
        ) : (
          <Button mt={3} onClick={getOtp}>
            Send Otp
          </Button>
        )}
        {error ? (
          <Text mt={2} color="red" fontSize="xl">
            {error}
          </Text>
        ) : (
          <Text></Text>
        )}

        {loading ? <Text mt={1}>loading...</Text> : <Text></Text>}
      </Flex>
    </Flex>
  );
};

const CustomPinField = (props: any) => {
  return (
    <HStack>
      <Box mb={2} mt={2}>
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
