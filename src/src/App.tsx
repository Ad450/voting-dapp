import * as React from "react";
import {
  ChakraProvider,
  Box,
  theme,
  Square,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { VerifyVoter } from "./features/voter_verification/components/verify_voter";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box height="container.xl" bg="pink.200" p="0">
      <Box paddingTop="50">
        <VStack>
          <Heading isTruncated as="h2" size="2xl">
            {" "}
            Let's Verify your Email!!{" "}
          </Heading>
          <Box paddingTop="100">
            <Square minWidth="container.sm">
              <VerifyVoter></VerifyVoter>
            </Square>
          </Box>
        </VStack>
      </Box>
    </Box>
  </ChakraProvider>
);
