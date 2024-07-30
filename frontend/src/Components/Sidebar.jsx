import { VStack, Text, Box, Image, List, ListItem, Divider, Flex, IconButton, Heading } from "@chakra-ui/react";
import logo from "../assets/img/l1.png";
import { FiLogOut, FiTrello, FiHome, FiCalendar, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

function Sidebar({ onClose }) {
  return (
    <VStack bg="#0C0C0C" w="" h="100vh" position={"relative"}>
      <Flex display={{ lg: "none" }} alignItems="center" gap={4} p="20px" position={"absolute"} right={0} top={0}>
        <IconButton borderRadius={"full"} bg="#03C988" icon={<FiX />} onClick={onClose} textColor={"#0c0c0c"} />
      </Flex>
      <Image src={logo} mt="50px" alt="" boxSize={"100px"} />
      <Text>Expense Tracker App</Text>
      <List w="full" padding="10">
        <NavLink to="/dashboard">
          <ListItem _hover={{ backgroundColor: "#1B4242" }} display={"flex"} fontWeight={"medium"} alignItems={"center"} padding={"4"} fontSize={"lg"} borderRadius={"10"} mb={"4"}>
            <FiHome style={{ fontSize: "21px", marginRight: "18px" }} />
            Dashboard
          </ListItem>
        </NavLink>
        <NavLink to="/stat">
          <ListItem _hover={{ backgroundColor: "#1B4242" }} display={"flex"} alignItems={"center"} padding={"4"} fontSize={"lg"} borderRadius={"10"} mb="4">
            <FiTrello style={{ fontSize: "21px", marginRight: "18px" }} />
            Statistics
          </ListItem>
        </NavLink>
        <NavLink to="/calendar">
          <ListItem _hover={{ backgroundColor: "#1B4242" }} display={"flex"} alignItems={"center"} padding={"4"} fontSize={"lg"} borderRadius={"10"}>
            <FiCalendar style={{ fontSize: "21px", marginRight: "18px" }} />
            Calendar
          </ListItem>
        </NavLink>
      </List>
      {/* <Divider w="250px"></Divider> */}
      <List w="full" padding="10" mt="auto">
        <NavLink to="/logout">
          <ListItem _hover={{ backgroundColor: "#03c988", color: "#0c0c0c", fontWeight: "medium" }} display={"flex"} alignItems={"center"} padding={"4"} fontSize={"lg"} borderRadius={"10"} border={"1px"} borderColor={"#03C988"}>
            <FiLogOut style={{ marginRight: "18px" }} />
            Logout
          </ListItem>
        </NavLink>
      </List>
    </VStack>
  );
}

export default Sidebar;
