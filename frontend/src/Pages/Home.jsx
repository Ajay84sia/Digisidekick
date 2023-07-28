import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAgeSortFun,
  getDataFun,
  getGenderFilterFun,
  getNameSearchFun,
} from "../Redux/userReducer/action";

const Home = () => {
  const dispatch = useDispatch();
  const { usersData, isLoading, isError } = useSelector(
    (store) => store.userReducer
  );

  const handleReset = () => {
    dispatch(getDataFun());
  };

  const handleSortByAge = (value) => {
    dispatch(getAgeSortFun(value));
  };

  const handleFilterByGender = (value) => {
    dispatch(getGenderFilterFun(value));
  };

  const handleSearch = (value) => {
    dispatch(getNameSearchFun(value));
  };

  useEffect(() => {
    dispatch(getDataFun());
  }, []);

  return (
    <Box style={{ width: "100%" }}>
      <HStack
        paddingTop={"120px"}
        marginBottom={"50px"}
        paddingLeft={"70px"}
        paddingRight={"70px"}
        gap={"50px"}
      >
        <Select onChange={(e) => handleSortByAge(e.target.value)}>
          <option value="">Sort by Age</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>
        <Select onChange={(e) => handleFilterByGender(e.target.value)}>
          <option value="">Filter by Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Select>
        <Input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search By User's Name"
        />
        <Button onClick={handleReset} width={"400px"}>
          Reset All Filters
        </Button>
      </HStack>

      {isLoading === true ? (
        <>
          <Image
            src="https://i.stack.imgur.com/hzk6C.gif"
            alt="loading"
            margin="auto"
            paddingTop="90px"
            marginBottom="360px"
          />
        </>
      ) : isError === true ? (
        <>
          <Image
            src="https://cdn.dribbble.com/users/774806/screenshots/3823110/something-went-wrong.gif"
            alt="error"
            margin="auto"
            width="45%"
          />
        </>
      ) : (
        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "30px",
            width: "90%",
            margin: "auto",
            paddingBottom: "50px",
          }}
        >
          {usersData &&
            usersData.map((el) => {
              return (
                <Box
                  key={el._id}
                  style={{
                    textAlign: "left",
                    borderRadius: "10px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    paddingBottom: "10px",
                  }}
                >
                  <Image
                    src={el.imageURL}
                    alt={el.name}
                    width={"100%"}
                    height={"250px"}
                    borderTopLeftRadius="10px"
                    borderTopRightRadius="10px"
                    marginBottom={"10px"}
                  />
                  <Text marginLeft={"20px"} style={{ fontWeight: "bold" }}>
                    Name : {el.name}
                  </Text>
                  <Text marginLeft={"20px"}>Age : {el.age}</Text>
                  <Text marginLeft={"20px"}>Gender : {el.gender}</Text>
                  <Text marginLeft={"20px"}>Email : {el.email}</Text>
                </Box>
              );
            })}
        </Box>
      )}
    </Box>
  );
};

export default Home;
