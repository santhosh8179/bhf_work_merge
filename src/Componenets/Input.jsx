import React from "react";
import styled from "styled-components";

const Input = styled.input`
  transition: border 0.2s cubic-bezier(1, 0, 0, 1);
  width: 100%;
  margin-bottom: 12px;
  margin-top: 4px;
  display: block;
  border: 2px solid #828282;
  box-shadow: 5px 5px 0 rgb(0 0 0 / 10%) inset;
  height: 50px;
  min-height: 0;
  padding: 18px 15px 15px;
  background: #fff;
  font-size: 16px;
  line-height: 1;
  font-weight: 400;
  font-family: "Roboto", "arial";
  color: #333;
`;

const SInput = (props) => {
  return <Input {...props} />;
};

export default SInput;
