import { VStack, Text, Box, Image, List, ListItem, Divider, Heading, Button } from "@chakra-ui/react";
import logo from "../assets/img/l1.png";
import { FiExternalLink } from "react-icons/fi";
function Endbar() {
  return (
    <VStack bg="#0C0C0C" w="" h="100vh" px={"4"}>
      <Image borderRadius="full" boxSize="100px" mt="50px" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
      <Text fontSize={"xl"}>
        Hi, <b>Rutul</b>
      </Text>
      <Divider borderColor={"teal"} />
      <Heading as={"h6"} fontSize={"xl"} w="full" my="10px">
        Recent Expenses
      </Heading>
      <List w="full" spacing="5">
        <ListItem display={"flex"} fontWeight={"medium"} borderBottom={"1px"} borderColor={"#03C988"} fontSize={"lg"}>
          <Box flex={"1"}>
            <Text noOfLines={"1"}>Pizza and ice cream</Text>
            <Text fontSize={"sm"} textColor={"gray"}>
              Food
            </Text>
          </Box>
          <Heading fontSize={"25px"}>123.55₹</Heading>
        </ListItem>
        <ListItem display={"flex"} fontWeight={"medium"} borderBottom={"1px"} borderColor={"#03C988"} fontSize={"lg"}>
          <Box flex={"1"}>
            <Text noOfLines={"1"}>Pizza and ice cream</Text>
            <Text fontSize={"sm"} textColor={"gray"}>
              Food
            </Text>
          </Box>
          <Heading fontSize={"25px"}>123.55₹</Heading>
        </ListItem>
        <ListItem display={"flex"} fontWeight={"medium"} borderBottom={"1px"} borderColor={"#03C988"} fontSize={"lg"}>
          <Box flex={"1"}>
            <Text noOfLines={"1"}>Pizza and ice cream</Text>
            <Text fontSize={"sm"} textColor={"gray"}>
              Food
            </Text>
          </Box>
          <Heading fontSize={"25px"}>123.55₹</Heading>
        </ListItem>
        <ListItem display={"flex"} fontWeight={"medium"} borderBottom={"1px"} borderColor={"#03C988"} fontSize={"lg"}>
          <Box flex={"1"}>
            <Text noOfLines={"1"}>Pizza and ice cream</Text>
            <Text fontSize={"sm"} textColor={"gray"}>
              Food
            </Text>
          </Box>
          <Heading fontSize={"25px"}>123.55₹</Heading>
        </ListItem>
        <ListItem display={"flex"} fontWeight={"medium"} borderBottom={"1px"} borderColor={"#03C988"} fontSize={"lg"}>
          <Box flex={"1"}>
            <Text noOfLines={"1"}>Pizza and ice cream</Text>
            <Text fontSize={"sm"} textColor={"gray"}>
              Food
            </Text>
          </Box>
          <Heading fontSize={"25px"}>123.55₹</Heading>
        </ListItem>
      </List>
      {/* <Divider w="250px"></Divider> */}
      <Button bg="#03C988" size="xs" w="full" mt="10px" textColor={"#0c0c0c"} rightIcon={<FiExternalLink style={{ fontSize: "14px" }} />}>
        All Expenses
      </Button>
    </VStack>
  );
}

export default Endbar;
