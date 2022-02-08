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
} from "@chakra-ui/react";
import { useState } from "react";

const VerifyVoter = () => {
  const [value, setValue] = useState("");
  const [isVerifyCode, setIsVerifyCode] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e: any) => setValue(e.target.value);

  return (
    <Box width="container.xl">
      <Stack>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            id="email"
            type="email"
            value={value}
            onChange={handleOnChange}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <CustomPinField></CustomPinField>
        {!loading ? (
          // will replace sent Otp with verify otp once the user has received the otp
          isVerifyCode ? (
            <Button
              colorScheme="red"
              variant="outline"
              onClick={performOperation}
            >
              Verify code
            </Button>
          ) : (
            <Button
              colorScheme="red"
              variant="outline"
              onClick={performOperation}
            >
              Send code
            </Button>
          )
        ) : (
          <CircularProgress value={30} color="orange.400" thickness="12px" />
        )}
      </Stack>
    </Box>
  );
};

const CustomPinField = () => {
  return (
    <HStack>
      <Box paddingTop="30">
        <PinInput otp onComplete={performOperation}>
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

// this will verify pin
const performOperation = async () => {
  try {
  } catch (error) {}
};

const getVerificationCode = async (email: string): Promise<void> => {};

export { VerifyVoter };

// get verification code
// https://uenrlibrary.herokuapp.com/api/auth/resend-verification-link

// verify code
// https://uenrlibrary.herokuapp.com/api/auth/email-verify/$code/$email

// figure out
// should disable button when loading
