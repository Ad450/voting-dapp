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
} from "@chakra-ui/react";
import { useState } from "react";

const VerifyVoter = () => {
  const [value, setValue] = useState("");

  const isError = value === "";

  return (
    <Box width="container.xl">
      <Stack>
        <FormControl isInvalid={isError}>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" value={value} />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <CustomPinField></CustomPinField>
        {
          // will replace sent Otp with verify otp once the user has received the otp

          <Button colorScheme="red" variant="outline">
            Send Otp
          </Button>
        }
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
