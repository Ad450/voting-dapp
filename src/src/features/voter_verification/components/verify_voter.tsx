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

const VerifyVoter = () => {
  return (
    <Stack>
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" />
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
  );
};

const CustomPinField = () => {
  return (
    <HStack>
      <Box paddingTop="30">
        <PinInput otp onComplete={performVerification}>
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
const performVerification = () => {};
export { VerifyVoter };
