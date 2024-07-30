import React, { useState } from "react";
import { Input, Select, useToast, MenuList, MenuItem, MenuDivider, ButtonGroup, FormControl, FormLabel, InputLeftElement, InputRightElement, FormHelperText, InputGroup, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Box, Heading, Flex, Button, Grid, GridItem, Image, Text, Divider, Icon, IconButton, Textarea } from "@chakra-ui/react";
import { FiPlusSquare, FiMenu, FiX } from "react-icons/fi";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Food from "../assets/img/food3.png";
import { Link } from "react-router-dom";
import axios from "axios";
function DashboardHeader({ onMenuClick }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    expenseAmount: "",
    expenseName: "",
    expenseDate: "",
    expenseNotes: "",
    userId: localStorage.getItem("uuid"),
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.expenseName || !formData.expenseAmount || !formData.expenseDate) {
      return toast({
        title: "Please fill in all required fields",
        status: "error",
        duration: 4000,
        position: "top",
      });
    }

    try {
      setIsLoading(true);
      axios.post("http://localhost:5500/api/expenses", formData);
      // console.log(formData);
      toast({
        title: "Expense Added",
        status: "success",
        duration: 4000,
        position: "top",
      });
      setFormData({
        expenseAmount: "",
        expenseName: "",
        expenseDate: "",
        expenseNotes: "",
        userId: localStorage.getItem("uuid"),
      });
      fetchExpenses();
      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

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
  return (
    <>
      <Box bg="#151515">
        <Flex alignItems={{ lg: "center" }} gap="3" flexDirection={{ base: "column", lg: "row" }} justifyContent={"space-between"}>
          <Flex alignItems="center" gap={4}>
            <IconButton onClick={onMenuClick} display={{ base: "inline-flex", lg: "none" }} bg="#03C988" icon={<FiMenu />} textColor={"#0c0c0c"} borderRadius={0} />
            <Heading display={{ base: "none", lg: "block" }} size="lg" fontWeight="medium">
              Dashboard
            </Heading>
            <Text display={{ base: "block", lg: "none" }} fontSize={"xl"} w="full" textAlign={"right"}>
              Hi, <b>Rutul</b>
            </Text>
            <Image display={{ base: "block", lg: "none" }} borderRadius="full" boxSize="40px" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
          </Flex>
          {/* <Divider display={{ base: "block", lg: "none" }}></Divider> */}

          <Button onClick={onOpen} display={{ base: "none", lg: "inline-flex" }} textColor={"#0c0c0c"} leftIcon={<FiPlusSquare style={{ fontSize: "21px" }} />} bg="#03C988">
            Add Expense
          </Button>
        </Flex>
        <Button onClick={onOpen} display={{ base: "inline-flex", lg: "none" }} position="fixed" bottom="0" left="0" width="100%" textColor={"#0c0c0c"} leftIcon={<FiPlusSquare style={{ fontSize: "21px" }} />} bg="#03C988" borderRadius="none">
          Add Expense
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay backdropFilter="blur(2px)" />
          <ModalContent bg="#0c0c0c" border="1px" borderColor={"#03C988"} p="3">
            <ModalHeader>Add Expenses</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb="3">
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel>Expense Amount</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                      ₹
                    </InputLeftElement>
                    <Input onChange={handleChange} type="number" placeholder="Enter amount" name="expenseAmount" focusBorderColor="#03C988" />
                  </InputGroup>

                  <FormLabel mt="3">Expense Category</FormLabel>
                  <Select placeholder="Select Category" onChange={handleChange} name="expenseName" mt="2">
                    <option value="Food">Food</option>
                    <option value="Fuel">Fuel</option>
                    <option value="Travel">Travel</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Rent">Rent</option>
                    <option value="Electricity">Electricity</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Health">Health</option>
                    <option value="Education">Education</option>
                    <option value="Gifts">Gifts</option>
                    <option value="Other">Other</option>
                  </Select>
                  <FormLabel mt="3">Date</FormLabel>
                  <Input onChange={handleChange} type="date" name="expenseDate" focusBorderColor="#03C988" />
                  <FormLabel mt="3">Notes</FormLabel>
                  <Textarea onChange={handleChange} placeholder="Any Notes..." name="expenseNotes" focusBorderColor="#03C988" />
                  <ButtonGroup spacing="4" w="full">
                    <Button isLoading={isLoading} loadingText="Adding" textColor={"#0c0c0c"} bg="#03C988" mt="5" w="full" type="submit">
                      Add Expense
                    </Button>
                  </ButtonGroup>
                  {/* {message && <FormHelperText textColor={"red"}>{message}</FormHelperText>} */}
                </FormControl>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}

export default DashboardHeader;

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
            <Heading>125₹</Heading>
          </Flex>
        </GridItem>
      </Grid> */
}
