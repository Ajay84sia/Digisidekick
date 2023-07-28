import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import Users from "../Pages/Users";
import PrivateRoute from "./PrivateRoute";
import AddnewUser from "../Pages/AddnewUser";
import EditUser from "../Pages/EditUser";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/adduser" element={<AddnewUser />}></Route>
        <Route path="/editUser/:editID" element={<EditUser />}></Route>
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
