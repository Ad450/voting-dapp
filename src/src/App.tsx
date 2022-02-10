import * as React from "react";
import { ChakraProvider, Box, theme, Heading, VStack } from "@chakra-ui/react";
import { VerifyVoter } from "./features/voter_verification/components/verify_voter";
import { Routes, Route } from "react-router-dom";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={VerifyVoter} />
    </Routes>
  </ChakraProvider>
);
