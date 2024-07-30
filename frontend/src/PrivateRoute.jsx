import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { CircularProgress, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function PrivateRoute({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    const storedUUID = localStorage.getItem("uuid");
    // console.log(storedLoggedIn);
    if (storedLoggedIn && storedUUID) {
      setIsLoggedIn(JSON.parse(storedLoggedIn));
    }
    setIsLoading(false);
    // setTimeout(() => {
    // }, 3000);
  }, []);

  if (isLoading) {
    return (
      <Center minH={"100vh"}>
        <CircularProgress isIndeterminate size="100px" color="blue.500" />
      </Center>
    );
  }

  if (isLoggedIn) {
    console.log("Logged in:", isLoggedIn);
    return children;
  } else {
    console.log("Logged in:", isLoggedIn);
    return <Navigate to="/login" replace />;
  }
}

export default PrivateRoute;
