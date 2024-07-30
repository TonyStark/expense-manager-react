import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, InputGroup, FormControl, FormLabel, InputLeftElement, FormHelperText, Box, Image, ButtonGroup, Button, IconButton, Flex, Container, Heading, Center } from "@chakra-ui/react";
import logo from "../assets/img/l1.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
function Signup() {
  // const API_URL = process.env.REACT_APP_API_URL;
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const [formData, setFormData] = useState({
    userNickName: "",
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
  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userNickName, userEmail, userPassword } = formData;
    if (!userNickName || !userEmail || !userPassword) {
      return setMessage("All fields are required");
    }
    try {
      setIsLoading(true);
      const response = await axios.post(`http://localhost:5500/api/users`, formData);
      console.log(response);
      setMessage("");
      navigate("/login", { state: { signupMessage: "Signup successful! Please log in." } });
    } catch (error) {
      setMessage("Invalid or Incorrect Details");
    } finally {
      setIsLoading(false);
    }
  };
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
            Signup
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Nick Name</FormLabel>
              <Input type="text" name="userNickName" onChange={handleChange} focusBorderColor="#03C988" />

              <FormLabel mt="5">Email address</FormLabel>
              <Input type="email" name="userEmail" onChange={handleChange} focusBorderColor="#03C988" />

              <FormLabel mt="5">Password</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <IconButton variant="link" icon={showPassword ? <FiEyeOff /> : <FiEye />} onClick={handleClickShowPassword} />
                </InputLeftElement>
                <Input name="userPassword" onChange={handleChange} type={showPassword ? "text" : "password"} focusBorderColor="#03C988" />
              </InputGroup>

              <ButtonGroup spacing="4" w="full">
                <Button isLoading={isLoading} loadingText="Signup" textColor={"#0c0c0c"} bg="#03C988" mt="5" w="full" type="submit">
                  Signup
                </Button>
                <Link to="/login" style={{ width: "100%", marginTop: "20px" }}>
                  <Button textColor={"#0c0c0c"} bg="#FFDE4D" w="full">
                    Login
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

export default Signup;
