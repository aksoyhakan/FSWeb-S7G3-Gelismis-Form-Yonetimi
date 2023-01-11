import React from "react";
import styled from "styled-components";

const Error = (props) => {
  const { errors, errorBoolean } = props;
  const SCErrorDiv = styled.div`
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    border: 0.25rem solid red;
    transition: all 2s linear;
    display: ${(props) => (props.errorBoolean ? "block" : "none")};
  `;

  let errorsArray = Object.values(errors);
  return (
    <SCErrorDiv errorBoolean={errorBoolean}>
      {errorsArray.map((item) => (
        <p>{item}</p>
      ))}
    </SCErrorDiv>
  );
};

export default Error;
