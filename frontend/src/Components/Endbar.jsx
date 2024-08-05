import { VStack, Spinner, Text, Box, Image, List, ListItem, Divider, Heading, Button } from "@chakra-ui/react";
import logo from "../assets/img/l1.png";
import { FiExternalLink } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Endbar({ expenseData: propExpenseData }) {
  const [expensesData, setExpensesData] = useState(propExpenseData || []);
  const [recentExp, setRecentExp] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setExpensesData(propExpenseData);
    setLoading(false);
  }, [propExpenseData]);

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
      {loading ? (
        <Spinner size="xl" color="#03C988" />
      ) : expensesData.length > 0 ? (
        <>
          <List w="full" spacing="5">
            {expensesData.map((exp) => (
              <ListItem key={exp._id} display={"flex"} fontWeight={"medium"} borderBottom={"1px"} borderColor={"#03C988"} fontSize={"lg"}>
                <Box flex={"1"}>
                  <Text noOfLines={"1"}>{exp.expenseNotes}</Text>
                  <Text fontSize={"sm"} textColor={"gray"}>
                    {exp.expenseName}
                  </Text>
                </Box>
                <Heading fontSize={"25px"}>{exp.expenseAmount}₹</Heading>
              </ListItem>
            ))}
          </List>
          <Button as={Link} to="/expenses" bg="#03C988" size="xs" w="full" mt="10px" color="#0c0c0c" rightIcon={<FiExternalLink style={{ fontSize: "14px" }} />}>
            All Expenses
          </Button>
        </>
      ) : (
        <Text color="gray.400" fontSize="sm" w="full">
          No expenses added
        </Text>
      )}
      {/* <Divider w="250px"></Divider> */}
    </VStack>
  );
}

export default Endbar;
