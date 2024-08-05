import React, { useState, useEffect } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Select, ButtonGroup, useDisclosure, useToast } from "@chakra-ui/react";
import axios from "axios";
function Expenses({ expenseData: propExpenseData, onExpenseAdded }) {
  const [expenses, setExpenses] = useState([]);
  const [expensesData, setExpensesData] = useState(propExpenseData || []);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const [formData, setFormData] = useState({
    expenseAmount: "",
    expenseName: "",
    expenseDate: "",
    expenseNotes: "",
    userId: localStorage.getItem("uuid"),
  });

  useEffect(() => {
    setExpensesData(propExpenseData);
  }, [propExpenseData]);
  useEffect(() => {
    if (selectedExpense) {
      setFormData({
        expenseAmount: selectedExpense.expenseAmount,
        expenseName: selectedExpense.expenseName,
        expenseDate: new Date(selectedExpense.expenseDate).toISOString().split("T")[0], // Format date as YYYY-MM-DD
        expenseNotes: selectedExpense.expenseNotes,
        userId: localStorage.getItem("uuid"),
      });
    }
  }, [selectedExpense]);

  const handleEditClick = (expense) => {
    const formattedDate = new Date(expense.expenseDate).toISOString().split("T")[0];
    setSelectedExpense({ ...expense, expenseDate: formattedDate });
    onOpen();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "expenseDate") {
      const formattedDate = new Date(value).toISOString().split("T")[0];
      setSelectedExpense((prev) => ({ ...prev, [name]: formattedDate }));
    } else {
      setSelectedExpense((prev) => ({ ...prev, [name]: value }));
    }
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
      if (selectedExpense) {
        await axios.put(`http://localhost:5500/api/expenses/${selectedExpense._id}`, formData);
        toast({
          title: "Expense Updated",
          status: "success",
          duration: 4000,
          position: "top",
        });
      } else {
        await axios.post("http://localhost:5500/api/expenses", formData);
        toast({
          title: "Expense Added",
          status: "success",
          duration: 4000,
          position: "top",
        });
      }
      setFormData({
        expenseAmount: "",
        expenseName: "",
        expenseDate: "",
        expenseNotes: "",
        userId: localStorage.getItem("uuid"),
      });
      onClose();
      const response = await axios.get(`http://localhost:5500/api/user-expenses?uuid=${localStorage.getItem("uuid")}`);
      setExpensesData(response.data.user);
      await onExpenseAdded();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5500/api/expenses/${id}`);

      setExpensesData(expensesData.filter((exp) => exp._id !== id));

      toast({
        title: "Expense Deleted",
        status: "success",
        duration: 4000,
        position: "top",
      });
      await onExpenseAdded();
    } catch (error) {
      console.error("Error deleting expense:", error);

      toast({
        title: "Error Deleting Expense",
        description: "There was an error deleting the expense.",
        status: "error",
        duration: 4000,
        position: "top",
      });
    }
  };

  return (
    <Box p={"20px"} w="">
      <TableContainer bg="#0c0c0c" rounded={"md"}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Sr.No.</Th>
              <Th>Date</Th>
              <Th>Type</Th>
              <Th>Name</Th>
              <Th>Amount</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {expensesData.map((exp, index) => (
              <Tr key={exp._id}>
                <Td>{index + 1}</Td>
                <Td>{new Date(exp.expenseDate).toLocaleDateString()}</Td>
                <Td>{exp.expenseName}</Td>
                <Td>{exp.expenseNotes}</Td>
                <Td>{exp.expenseAmount}₹</Td>
                <Td>
                  <ButtonGroup size="sm" isAttached>
                    <Button colorScheme="blue" onClick={() => handleEditClick(exp)}>
                      Edit
                    </Button>
                    <Button colorScheme="red" onClick={() => handleDelete(exp._id)}>
                      Delete
                    </Button>
                  </ButtonGroup>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(2px)" />
        <ModalContent bg="#0c0c0c" border="1px" borderColor={"#03C988"} p="3">
          <ModalHeader>Edit Expense</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="3">
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Expense Amount</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                    ₹
                  </InputLeftElement>
                  <Input type="number" placeholder="Enter amount" name="expenseAmount" value={selectedExpense?.expenseAmount || ""} onChange={handleChange} focusBorderColor="#03C988" />
                </InputGroup>
                <FormLabel mt="3">Expense On</FormLabel>
                <Input placeholder="Expense Name" name="expenseNotes" value={selectedExpense?.expenseNotes || ""} onChange={handleChange} focusBorderColor="#03C988" />
                <FormLabel mt="3">Expense Category</FormLabel>
                <Select placeholder="Select Category" onChange={handleChange} name="expenseName" value={selectedExpense?.expenseName || ""} mt="2">
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
                <Input type="date" name="expenseDate" value={selectedExpense?.expenseDate || ""} onChange={handleChange} focusBorderColor="#03C988" />
                <ButtonGroup spacing="4" w="full">
                  <Button textColor={"#0c0c0c"} bg="#03C988" mt="5" w="full" type="submit">
                    Save Changes
                  </Button>
                </ButtonGroup>
              </FormControl>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Expenses;
