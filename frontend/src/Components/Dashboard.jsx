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

function Dashboard({ expenseData: propExpenseData }) {
  const [expensesData, setExpensesData] = useState(propExpenseData || []);
  const [foodExpense, setFoodExpense] = useState(0);
  const [fuelExpense, setFuelExpense] = useState(0);
  const [travelExpense, setTravelExpense] = useState(0);
  const [maintenanceExpense, setMaintenanceExpense] = useState(0);
  const [rentExpense, setRentExpense] = useState(0);
  const [electricityExpense, setElectricityExpense] = useState(0);
  const [entertainmentExpense, setEntertainmentExpense] = useState(0);
  const [healthExpense, setHealthExpense] = useState(0);
  const [educationExpense, setEducationExpense] = useState(0);
  const [giftsExpense, setGiftsExpense] = useState(0);
  const [otherExpense, setOtherExpense] = useState(0);
  useEffect(() => {
    setExpensesData(propExpenseData);
  }, [propExpenseData]);
  useEffect(() => {
    let totalFoodExpense = 0;
    let totalFuelExpense = 0;
    let totalTravelExpense = 0;
    let totalMaintenanceExpense = 0;
    let totalRentExpense = 0;
    let totalElectricityExpense = 0;
    let totalEntertainmentExpense = 0;
    let totalHealthExpense = 0;
    let totalEducationExpense = 0;
    let totalGiftsExpense = 0;
    let totalOtherExpense = 0;
    expensesData.forEach((exp) => {
      switch (exp.expenseName) {
        case "Food":
          totalFoodExpense += exp.expenseAmount;
          break;
        case "Fuel":
          totalFuelExpense += exp.expenseAmount;
          break;
        case "Travel":
          totalTravelExpense += exp.expenseAmount;
          break;
        case "Maintenance":
          totalMaintenanceExpense += exp.expenseAmount;
          break;
        case "Rent":
          totalRentExpense += exp.expenseAmount;
          break;
        case "Electricity":
          totalElectricityExpense += exp.expenseAmount;
          break;
        case "Entertainment":
          totalEntertainmentExpense += exp.expenseAmount;
          break;
        case "Health":
          totalHealthExpense += exp.expenseAmount;
          break;
        case "Education":
          totalEducationExpense += exp.expenseAmount;
          break;
        case "Gifts":
          totalGiftsExpense += exp.expenseAmount;
          break;
        default:
          totalOtherExpense += exp.expenseAmount;
          break;
      }
    });
    setFoodExpense(totalFoodExpense);
    setFuelExpense(totalFuelExpense);
    setTravelExpense(totalTravelExpense);
    setMaintenanceExpense(totalMaintenanceExpense);
    setRentExpense(totalRentExpense);
    setElectricityExpense(totalElectricityExpense);
    setEntertainmentExpense(totalEntertainmentExpense);
    setHealthExpense(totalHealthExpense);
    setEducationExpense(totalEducationExpense);
    setGiftsExpense(totalGiftsExpense);
    setOtherExpense(totalOtherExpense);
  }, [expensesData]);

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
            <Heading>{fuelExpense}₹</Heading>
          </Flex>

          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Travel} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Travel
              </Text>
            </Box>
            <Heading>{travelExpense}₹</Heading>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Maintenace} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Maintenance
              </Text>
            </Box>
            <Heading>{maintenanceExpense}₹</Heading>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Rent} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Rent
              </Text>
            </Box>
            <Heading>{rentExpense}₹</Heading>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Electricity} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Electricity
              </Text>
            </Box>
            <Heading>{electricityExpense}₹</Heading>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Entertainment} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Entertainment
              </Text>
            </Box>
            <Heading>{entertainmentExpense}₹</Heading>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Health} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Health
              </Text>
            </Box>
            <Heading>{healthExpense}₹</Heading>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Education} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Education
              </Text>
            </Box>
            <Heading>{educationExpense}₹</Heading>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Gift} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Gifts
              </Text>
            </Box>
            <Heading>{giftsExpense}₹</Heading>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"} bg="#0C0C0C" border={"1px"} borderColor={"#03C988"} borderRadius={"md"} p="3">
            <Box flexShrink={0} textAlign={"center"}>
              <Image boxSize={"70px"} objectFit={"cover"} src={Other} />
              <Text mt="1" textColor={"gray"} fontWeight={"semibold"}>
                Other
              </Text>
            </Box>
            <Heading>{otherExpense}₹</Heading>
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
