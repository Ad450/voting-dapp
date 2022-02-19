import { Flex, Text, Button, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { vote } from "../datasources/remote_datasource";

export const Voting = () => {
  const [party, setParty] = useState("");

  const voteForParty = async (e: React.MouseEvent) => {
    setParty(e.currentTarget.innerHTML);
    try {
      await vote(party);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" bg="gray.900" p={12} rounded={6}>
        <Text mb={4}> Vote for a party by clicking one of these </Text>
        <HStack>
          <Button onClick={(e) => voteForParty(e)} size="sm">
            Party A
          </Button>
          <Button onClick={(e) => voteForParty(e)} size="sm">
            Party B
          </Button>
          <Button onClick={(e) => voteForParty(e)} size="sm">
            Party C
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
};
