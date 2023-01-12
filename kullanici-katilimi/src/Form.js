import React, { useEffect, useState } from "react";
import styled from "styled-components";

const dummyNewMember = {
  name: "",
  email: "",
  password: "",
  usingCondition: false,
};

const SCMainForm = styled.form`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 0.25rem solid blue;
`;

const SCFormDiv = styled.div`
  display: flex;
  width: 100%;
`;

const SCLabelDiv = styled.div`
  width: 45%;
  text-align: left;
`;

const SCInputDiv = styled.div`
  width: 45%;
  text-align: left;
`;

const SCLabel = styled.label`
  display: block;
  line-height: 1.5;
  margin-bottom: 0.5rem;
`;

const SCInput = styled.input`
  display: block;
  line-height: 1.5;
  margin-bottom: 0.5rem;
`;

const SCSubmitDiv = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2rem;
`;

const Form = (props) => {
  const {
    newMember,
    setNewMember,
    submitDisabled,
    checkError,
    setErrorBoolean,
    handleSubmit,
    setRegisteredMember,
    setRegisterBoolean,
  } = props;

  console.log(newMember);

  const handleMemberData = (event) => {
    console.log("içerdema");
    event.preventDefault();
    const { value, name, checked, type } = event.target;
    let newValue = value;
    if (type === "checkbox") newValue = checked;
    checkError(name, newValue);
    setNewMember({ ...newMember, [name]: newValue });

    console.log(newMember);
  };

  return (
    <SCMainForm
      onReset={() => {
        setNewMember(dummyNewMember);
        setErrorBoolean(false);
        setRegisteredMember(dummyNewMember);
        setRegisterBoolean(false);
      }}
      onSubmit={(event) => handleSubmit(event)}
    >
      <SCFormDiv>
        <SCLabelDiv>
          <SCLabel htmlFor="name">İsim-Soyisim</SCLabel>
          <SCLabel htmlFor="email">Email</SCLabel>
          <SCLabel htmlFor="password">Şifre</SCLabel>
        </SCLabelDiv>
        <SCInputDiv>
          <SCInput
            id="name"
            name="name"
            type="text"
            value={newMember.name}
            data-cs="name"
            onChange={(event) => handleMemberData(event)}
          ></SCInput>
          <SCInput
            id="email"
            name="email"
            type="email"
            data-cs="email"
            value={newMember.email}
            onChange={(event) => handleMemberData(event)}
          ></SCInput>
          <SCInput
            id="password"
            name="password"
            type="password"
            data-cs="password"
            value={newMember.password}
            onChange={(event) => handleMemberData(event)}
          ></SCInput>
        </SCInputDiv>
      </SCFormDiv>
      <SCSubmitDiv>
        <label htmlFor="usingCondition">
          Kullanım Şartlarını kabul eder ve onaylıyorum.
        </label>
        <input
          id="usingCondition"
          name="usingCondition"
          type="checkbox"
          data-cs="terms"
          checked={newMember.usingCondition}
          onChange={(event) => handleMemberData(event)}
        ></input>
        <div style={{ marginTop: "2rem" }}>
          <button
            style={{
              display: "inline-block",
              width: "10rem",
              marginRight: "3rem",
            }}
            type="submit"
            data-cs="submit"
            disabled={submitDisabled}
          >
            Kaydet
          </button>
          <button
            style={{ display: "inline-block", width: "10rem" }}
            type="reset"
            data-cs="reset"
            disabled={
              newMember.name === "" &&
              newMember.email === "" &&
              newMember.password === ""
                ? true
                : false
            }
          >
            Formu Temizle
          </button>
        </div>
      </SCSubmitDiv>
    </SCMainForm>
  );
};

export default Form;
