import React, { useState, useEffect } from "react";
import { Box, Heading, Flex, Button, Grid, GridItem, Image, Text, SimpleGrid, Icon, IconButton, Divider } from "@chakra-ui/react";
import { FiPlusSquare, FiMenu, FiX } from "react-icons/fi";
import Food from "../assets/img/food3.png";
import Gift from "../assets/img/6453565.png";
import Fuel from "../assets/img/9154309.png";
import Travel from "../assets/img/8209360.png";
import Maintenace from "../assets/img/7627981.png";
import Rent from "../assets/img/1040988.png";
import Electricity from "../assets/img/1375571.png";
import Entertainment from "../assets/img/8074685.png";
import Health from "../assets/img/9211930.png";
import Education from "../assets/img/2097055.png";
import Other from "../assets/img/2779847.png";
import axios from "axios";

function Dashboard() {
  const [expenseData, setExpensesData] = useState([]);
  const [foodExpense, setFoodExpense] = useState(0);
  const fetchExpenses = async () => {
    // setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:5500/api/expenses?uuid=${localStorage.getItem("uuid")}`);
      setExpensesData(response.data.user);
      console.log(expenseData);
    } catch (error) {
      console.error(error);
    } finally {
      // setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchExpenses();
  }, []);
  useEffect(() => {
    let totalFoodExpense = 0;
    expenseData.forEach((exp) => {
      if (exp.expenseName === "Food") {
        totalFoodExpense += exp.expenseAmount;
      }
    });
    setFoodExpense(totalFoodExpense);
  }, [expenseData]);

  return (
    <>
      {/* Food, Fuel, Travel, Maintenance, Rent, Electricity, Health, Entertainment, Education, Gifts, Clothing, Other */}
      <Box p={"20px"} w="">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 2, xl: 3 }} spacing={4} mt={{ base: "5px", lg: "20px" }}>
          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Food} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Food
              </Text>
            </Box>
            <Heading>{foodExpense}₹</Heading>
          </Flex>

          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Fuel} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Fuel
              </Text>
            </Box>
            <Heading>0₹</Heading>
          </Flex>

          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Travel} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Travel
              </Text>
            </Box>
            <Heading>0₹</Heading>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Maintenace} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Maintenance
              </Text>
            </Box>
            <Heading>0₹</Heading>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Rent} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Rent
              </Text>
            </Box>
            <Heading>0₹</Heading>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Electricity} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Electricity
              </Text>
            </Box>
            <Heading>0₹</Heading>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Entertainment} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Entertainment
              </Text>
            </Box>
            <Heading>0₹</Heading>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Health} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Health
              </Text>
            </Box>
            <Heading>0₹</Heading>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Education} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Education
              </Text>
            </Box>
            <Heading>0₹</Heading>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Gift} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Gifts
              </Text>
            </Box>
            <Heading>0₹</Heading>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Other} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Other
              </Text>
            </Box>
            <Heading>0₹</Heading>
          </Flex>
        </SimpleGrid>
        <Box display={{ base: "block", lg: "none" }} height="50px" />
      </Box>
    </>
  );
}

export default Dashboard;

{
  /* <Grid templateColumns="repeat(3, 1fr)" gap={4} mt="20px">
        <GridItem w="" h="" bg="#0C0C0C" border={"1px"} borderColor={"#20262E"} borderRadius={"md"} p="10px">
          <Flex alignItems={"center"} justifyContent={"space-between"} px="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Food} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Food
              </Text>
            </Box>
            <Heading>0₹</Heading>
          </Flex>
        </GridItem>
      </Grid> */
}
