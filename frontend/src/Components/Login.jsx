import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Input, InputGroup, FormControl, FormLabel, InputLeftElement, FormHelperText, Box, Image, ButtonGroup, Button, IconButton, Flex, Container, Heading, Center } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import logo from "../assets/img/l1.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
function Login() {
  const toast = useToast();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
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
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:5500/api/users`, {
        params: {
          email: formData.userEmail,
          password: formData.userPassword,
        },
      });

      if (response.data.message === "true") {
        setMessage("");
        localStorage.setItem("isLoggedIn", response.data.message);
        localStorage.setItem("uuid", response.data.uuid);
        navigate("/dashboard");
      } else {
        setMessage("Invalid or Incorrect Details");
      }
    } catch (error) {
      setMessage("Invalid or Incorrect Details");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (location.state?.signupMessage) {
      toast({
        title: location.state.signupMessage,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [location.state, toast]);
  return (
    <Center h="100vh">
      <Container display={"flex"} flexDirection={{ base: "column", md: "row" }} bg="#0c0c0c" borderRadius={5} p="0">
        <Flex borderRight={{ base: 0, md: "1px" }} borderRightColor={{ base: "transparent", md: "#03C988" }} borderBottom={{ base: "1px", md: "0" }} borderBottomColor={{ base: "#03C988", md: "transparent" }} p="10" flexBasis={"30%"} direction="column" justifyContent="center" alignItems="center">
          <Image src={logo} alt="" boxSize={"130px"} />
          <Heading textAlign={"center"} mt="20px">
            Expense Tracker
          </Heading>
        </Flex>
        <Box p="10">
          <Heading mb="5" textAlign={"center"} size={"lg"} textDecoration={"underline"}>
            Login
          </Heading>
          <form action="" onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="userEmail" onChange={handleChange} focusBorderColor="#03C988" />
              <FormLabel mt="5">Password</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <IconButton variant="link" icon={showPassword ? <FiEyeOff /> : <FiEye />} onClick={handleClickShowPassword} />
                </InputLeftElement>
                <Input onChange={handleChange} type={showPassword ? "text" : "password"} focusBorderColor="#03C988" name="userPassword" />
              </InputGroup>
              <ButtonGroup spacing="4" w="full">
                <Button isLoading={isLoading} loadingText="Login" textColor={"#0c0c0c"} bg="#03C988" mt="5" w="full" type="submit">
                  Login
                </Button>

                <Link to="/signup" style={{ width: "100%", marginTop: "20px" }}>
                  <Button textColor={"#0c0c0c"} bg="#FFDE4D" w="full">
                    Signup
                  </Button>
                </Link>
              </ButtonGroup>
              {message && <FormHelperText textColor={"red"}>{message}</FormHelperText>}
            </FormControl>
          </form>
        </Box>
      </Container>
    </Center>
  );
}

export default Login;
