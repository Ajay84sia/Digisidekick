import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addDealFun } from "../Redux/marketplaceReducer/action";
import { Link } from "react-router-dom";
import { addDataFun } from "../Redux/userReducer/action";
// import OemModal from "./OemModal";

const initialState = {
  name: "",
  age: "",
  gender: "",
  imageURL: "",
  email: "",
};

const AddnewUser = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [userForm, setUserForm] = useState(initialState);

  const handleFormChange = (e) => {
    if (e.target.type === "number") {
      setUserForm((prev) => {
        return { ...userForm, [e.target.name]: Number(e.target.value) };
      });
    } else {
      setUserForm((prev) => {
        return { ...userForm, [e.target.name]: e.target.value };
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      userForm.name === "" ||
      userForm.age === "" ||
      userForm.gender === "" ||
      userForm.imageURL === "" ||
      userForm.email === ""
    ) {
      toast({
        title: "Please fill all the details first",
        description: "",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    } else {
      dispatch(addDataFun(userForm)).then(() => {
        let msg = localStorage.getItem("marketmsg");
        if (msg == "New User Data has been added") {
          toast({
            title: "New User Data has been added.",
            description: "",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Something Went Wrong.",
            description: "",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }
      });
    }
  };
  return (
    <Box style={{ width: "100%", paddingBottom: "10px", paddingTop: "50px" }}>
      <form
        onSubmit={handleFormSubmit}
        style={{
          width: "50%",
          margin: "auto",
          padding: "40px",
          paddingTop: "20px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          marginTop: "50px",
          borderRadius: "20px",
          color: "teal",
        }}
      >
        <Center>
          <Heading>Add New User</Heading>
        </Center>

        <Box style={{ width: "90%", marginLeft: "20px" }}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              type="text"
              value={userForm.name}
              onChange={handleFormChange}
              placeholder="Enter Name"
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel>Age</FormLabel>
            <Input
              name="age"
              type="number"
              value={userForm.age}
              onChange={handleFormChange}
              placeholder="Enter Age"
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <Select name="gender" onChange={handleFormChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Select>
          </FormControl>
          <br />
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input
              name="email"
              type="email"
              value={userForm.email}
              onChange={handleFormChange}
              placeholder="Enter Email Address"
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel>Image URL</FormLabel>
            <Input
              name="imageURL"
              type="url"
              value={userForm.imageURL}
              onChange={handleFormChange}
              placeholder="Enter User Image URL"
            />
          </FormControl>
          <br />
          <Flex justifyContent={"space-around"}>
            <Button mt={4} colorScheme="teal" type="submit">
              ADD USER
            </Button>
            <Link to="/users">
              <Button colorScheme="teal" size="md" marginTop={"16.5px"}>
                Go Back
              </Button>
            </Link>
          </Flex>
        </Box>
      </form>
      <br />
    </Box>
  );
};

export default AddnewUser;
