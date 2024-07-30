import { Input, InputGroup, FormControl, FormLabel, InputLeftElement, FormHelperText, Box, Image, ButtonGroup, Button, IconButton, Flex, Container, Heading } from "@chakra-ui/react";
import { FiPlusSquare, FiMenu, FiX } from "react-icons/fi";
function Add() {
  return (
    <>
      <Container maxW="md" mt="20px" bg="#0c0c0c" p="10">
        <form>
          <FormControl>
            <FormLabel>Nick Name</FormLabel>
            <Input type="text" name="userNickName" focusBorderColor="#03C988" />

            <FormLabel mt="5">Email address</FormLabel>
            <Input type="email" name="userEmail" focusBorderColor="#03C988" />
          </FormControl>
        </form>
      </Container>
    </>
  );
}

export default Add;
