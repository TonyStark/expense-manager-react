import React, { useState, useEffect } from "react";
import { useDisclosure, Grid, GridItem, Button } from "@chakra-ui/react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import PendingTask from "./Components/PendingTask";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Endbar from "./Components/Endbar";
import DashboardHeader from "./Components/DashboardHeader";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Signup from "./Components/Signup";
import PrivateRoute from "./PrivateRoute";
import Add from "./Components/Add";
import axios from "axios";
import Expenses from "./Components/Expenses";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [expenseData, setExpenseData] = useState([]);
  const fetchExpenses = async () => {
    try {
      const response = await axios.get(`http://localhost:5500/api/user-expenses?uuid=${localStorage.getItem("uuid")}`);
      setExpenseData(response.data.user);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchExpenses();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={localStorage.getItem("isLoggedIn") ? "/dashboard" : "/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Grid templateColumns="1fr,1fr,1fr" templateRows="auto 1fr" height="100vh">
                <GridItem width={{ base: "full", md: "270px" }} transform={{ base: isOpen ? "translateX(0)" : "translateX(-100%)", lg: "translateX(0)" }} transition="transform 0.4s ease-in-out" display={{ base: "block" }} rowSpan={2} position="fixed" top="0" left="0" bottom="0" bg="gray.200" zIndex="1000">
                  <Sidebar onClose={onClose} />
                </GridItem>

                <GridItem display={{ base: "none", lg: "block" }} width={{ base: "full", lg: "270px" }} rowSpan={2} position="fixed" top="0" right="0" bottom="0" bg="gray.200" zIndex="999">
                  <Endbar expenseData={expenseData} />
                </GridItem>

                <GridItem colSpan={2} boxShadow="md" colStart={2} position="fixed" top="0" left={{ base: "0", lg: "270px" }} right={{ base: "0", lg: "270px" }} bg="#151515" padding="20px" zIndex="999">
                  <DashboardHeader onMenuClick={onOpen} onExpenseAdded={fetchExpenses} />
                </GridItem>

                <GridItem colSpan={2} marginTop={{ base: "80px", lg: "80px" }} overflowY="auto" overflowX="hidden" marginLeft={{ base: "none", lg: "270px" }} marginRight={{ base: "none", lg: "270px" }}>
                  <Dashboard expenseData={expenseData} />
                </GridItem>
              </Grid>
            </PrivateRoute>
          }
        />
        <Route
          path="/expenses"
          element={
            <PrivateRoute>
              <Grid templateColumns="1fr,1fr,1fr" templateRows="auto 1fr" height="100vh">
                <GridItem width={{ base: "full", md: "270px" }} transform={{ base: isOpen ? "translateX(0)" : "translateX(-100%)", lg: "translateX(0)" }} transition="transform 0.4s ease-in-out" display={{ base: "block" }} rowSpan={2} position="fixed" top="0" left="0" bottom="0" bg="gray.200" zIndex="1000">
                  <Sidebar onClose={onClose} />
                </GridItem>

                <GridItem display={{ base: "none", lg: "block" }} width={{ base: "full", lg: "270px" }} rowSpan={2} position="fixed" top="0" right="0" bottom="0" bg="gray.200" zIndex="999">
                  <Endbar expenseData={expenseData} />
                </GridItem>

                <GridItem colSpan={2} boxShadow="md" colStart={2} position="fixed" top="0" left={{ base: "0", lg: "270px" }} right={{ base: "0", lg: "270px" }} bg="#151515" padding="20px" zIndex="999">
                  <DashboardHeader onMenuClick={onOpen} onExpenseAdded={fetchExpenses} />
                </GridItem>

                <GridItem colSpan={2} marginTop={{ base: "80px", lg: "80px" }} overflowY="auto" overflowX="hidden" marginLeft={{ base: "none", lg: "270px" }} marginRight={{ base: "none", lg: "270px" }}>
                  <Expenses expenseData={expenseData} onExpenseAdded={fetchExpenses} />
                </GridItem>
              </Grid>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;

{
  /* <Grid templateColumns={"repeat(10,1fr)"}>
  <GridItem colSpan={2}>
    <Sidebar />
  </GridItem>
  <GridItem colSpan={6}>
    <Dashboard />
  </GridItem>
  <GridItem colSpan={2}>
    <Endbar />
  </GridItem>
</Grid>; */
}
