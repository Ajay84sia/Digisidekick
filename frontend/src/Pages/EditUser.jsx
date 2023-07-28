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
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { editMyDataFun } from "../Redux/userReducer/action";

const EditUser = () => {
  const toast = useToast();
  const { editID } = useParams();
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { myUsersData, isLoading, isError } = useSelector(
    (store) => store.userReducer
  );

  const handleFormChange = (e) => {
    if (e.target.type === "number") {
      setData((prev) => {
        return { ...data, [e.target.name]: Number(e.target.value) };
      });
    } else {
      setData((prev) => {
        return { ...data, [e.target.name]: e.target.value };
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    delete data._id;
    delete data.userID;
    if (
      data.name === "" ||
      data.age === "" ||
      data.gender === "" ||
      data.imageURL === "" ||
      data.email === ""
    ) {
      toast({
        title: "Please fill all the details first",
        description: "",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    } else {
      dispatch(editMyDataFun(editID, data)).then(() => {
        toast({
          title: "Data updated successfully.",
          description: "",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      });
    }
  };

  useEffect(() => {
    let newData = myUsersData.filter((el) => {
      return el._id == editID;
    });
    setData(newData[0]);
  }, []);

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
          <Heading>Edit User Details</Heading>
        </Center>

        <Box style={{ width: "90%", marginLeft: "20px" }}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              type="text"
              value={data?.name}
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
              value={data?.age}
              onChange={handleFormChange}
              placeholder="Enter Age"
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <Select
              name="gender"
              value={data?.gender}
              onChange={handleFormChange}
            >
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
              value={data?.email}
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
              value={data?.imageURL}
              onChange={handleFormChange}
              placeholder="Enter User Image URL"
            />
          </FormControl>
          <br />
          <Flex justifyContent={"space-around"}>
            <Button mt={4} colorScheme="teal" type="submit">
              EDIT USER
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

export default EditUser;
