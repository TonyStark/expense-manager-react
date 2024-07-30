import { Card, Box, Heading, Text } from "@chakra-ui/react";
function PendingTask() {
  return (
    <Card>
      <Box>
        <Heading as="h2">Pending Task</Heading>
        <Text>This is a pending task.</Text>
      </Box>
    </Card>
  );
}

export default PendingTask;
