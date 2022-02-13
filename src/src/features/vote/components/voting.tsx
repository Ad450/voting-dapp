import { Flex, Text, Button, HStack } from "@chakra-ui/react";

export const Voting = () => (
  <Flex height="100vh" alignItems="center" justifyContent="center">
    <Flex direction="column" bg="gray.900" p={12} rounded={6}>
      <Text mb={4}> Vote for a party by clicking one of these </Text>
      <HStack>
        <Button size="sm">Party A</Button>
        <Button size="sm">Party B</Button>
        <Button onClick={() => console.log(MouseEvent.arguments)} size="sm">
          Party C
        </Button>
      </HStack>
    </Flex>
  </Flex>
);
