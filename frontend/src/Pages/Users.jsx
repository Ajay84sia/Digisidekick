import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMyDataFun, getMyDataFun } from "../Redux/userReducer/action";
import {
  Box,
  Button,
  HStack,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const Users = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { myUsersData, isLoading, isError } = useSelector(
    (store) => store.userReducer
  );

  const handleDelete = (id) => {
    dispatch(deleteMyDataFun(id)).then(() => {
      toast({
        title: "Data Delete Successfully",
        description: "",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      dispatch(getMyDataFun());
    });
  };

  useEffect(() => {
    dispatch(getMyDataFun());
  }, []);

  console.log(myUsersData);
  return (
    <Box style={{ paddingTop: "100px" }}>
      <HStack margin="20px" marginLeft="70%" gap="40px">
        <Link to="/adduser">
          <Button colorScheme="teal" size="md">
            Add New User
          </Button>
        </Link>
      </HStack>

      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>S.No.</Th>
              <Th>User Image</Th>
              <Th>User Details</Th>
              <Th>Edit User Details</Th>
              <Th>Delete User</Th>
            </Tr>
          </Thead>
          <Tbody>
            {myUsersData?.map((el, i) => (
              <Tr key={i + 1}>
                <Td>{i + 1}.</Td>
                <Td>
                  {" "}
                  <Image src={el.imageURL} alt={el.name} width="100px" />
                </Td>
                <Td padding={"10px"}>
                  <Text marginBottom="10px">Name : {el.name}</Text>
                  <Text marginBottom="10px">Age : {el.age}</Text>
                  <Text marginBottom="10px">Gender : {el.gender}</Text>
                  <Text marginBottom="10px">Email : {el.email}</Text>
                </Td>
                <Td>
                  <Link to={`/editUser/${el?._id}`}>
                    <Button colorScheme="blue">
                      <EditIcon />
                    </Button>
                  </Link>
                </Td>
                <Td>
                  <Button
                    colorScheme="red"
                    onClick={() => handleDelete(el._id)}
                  >
                    <DeleteIcon />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Users;
