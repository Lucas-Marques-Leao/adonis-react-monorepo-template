import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";

const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sign-in" />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
};

export default AuthRoutes;
