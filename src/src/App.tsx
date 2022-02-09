import * as React from "react";
import { ChakraProvider, Box, theme, Heading, VStack } from "@chakra-ui/react";
import { VerifyVoter } from "./features/voter_verification/components/verify_voter";

export const App = () => (
  <ChakraProvider theme={theme}>
    <VerifyVoter></VerifyVoter>
  </ChakraProvider>
);
