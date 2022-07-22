import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";

// TODO: Make Auth context
const signed = true;

const MyRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <div>{signed ? <AppRoutes /> : <AuthRoutes />}</div>
    </BrowserRouter>
  );
};

export default MyRoutes;
