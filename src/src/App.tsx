import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Flex,
  theme,
  VStack,
  
} from "@chakra-ui/react"



export const App = () => (
  <ChakraProvider theme={theme}>
    <VStack >
    <Flex>
     <Box height='container.xl'bg='pink.200' width='container.xl'>
      <Box paddingTop='50'>
        <Text>hello Ghana</Text>
      </Box>
     </Box>
      </Flex>
    </VStack>
   
  </ChakraProvider>
)
