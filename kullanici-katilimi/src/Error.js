import React from "react";
import styled from "styled-components";

const SCErrorDiv = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border: 0.25rem solid red;
  transition: display 2s easy-in;
  display: ${(props) => (props.errorBoolean ? "block" : "none")};
`;

const SCErrorMainDiv = styled.div`
  display: block;
`;

const Error = (props) => {
  const { errors, errorBoolean } = props;

  let errorsArray = Object.values(errors);
  return (
    <SCErrorMainDiv>
      <SCErrorDiv errorBoolean={errorBoolean}>
        {errorsArray.map((item) => (
          <p>{item}</p>
        ))}
      </SCErrorDiv>
    </SCErrorMainDiv>
  );
};

export default Error;
