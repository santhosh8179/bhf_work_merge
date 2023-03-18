import React from "react";
import { useNavigate } from "react-router-dom";
import SButton from "../Componenets/Button";

const Logout = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    navigate("/");
  };

  return <SButton onClick={onClickLogout}>Logout</SButton>;
};

export default Logout;
