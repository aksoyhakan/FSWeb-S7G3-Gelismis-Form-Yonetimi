import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import * as Yup from "yup";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Error from "./Error";
import Register from "./Register";

const dummyMember = {
  name: "",
  email: "",
  password: "",
  usingCondition: false,
};

const dummyErrors = {
  name: "",
  email: "",
  password: "",
  usingCondition: "",
};

const minLengthName = 5;
const minLengthPassword = 8;
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

const formTemplate = Yup.object().shape({
  email: Yup.string()
    .email("Lütfen geçerli bir email adresi girin")
    .required("Email zorunludur."),
  name: Yup.string()
    .min(minLengthName, "İsim-soyisim en az 5 harf girilmesi gerekmektedir.")
    .required("İsim soyisim doldurulması zorunludur."),
  password: Yup.string()
    .min(minLengthPassword, "Şifre uzunluğu en az 8 farf olması gerekmetkedir.")
    .matches(passwordRules, "Güçlü şifre giriniz")
    .required("Şifre giriniz"),
  usingCondition: Yup.boolean().oneOf(
    [true],
    "Kabul şartlarını onaylamanız gerekir"
  ),
});

function App() {
  const [newMember, setNewMember] = useState(dummyMember);
  const [registeredMember, setRegisteredMember] = useState(dummyMember);
  const [databaseError, setDatabaseError] = useState("");

  const [submitDisabled, setsubmitDisabled] = useState(true);
  const [errors, setErrors] = useState(dummyErrors);
  const [errorBoolean, setErrorBoolean] = useState(false);
  const [registerBoolean, setRegisterBoolean] = useState(false);

  useEffect(() => {
    if (
      errors.name !== "" ||
      errors.email !== "" ||
      errors.password !== "" ||
      errors.usingCondition !== ""
    )
      setErrorBoolean(true);
    else setErrorBoolean(false);
  }, [errors]);

  useEffect(() => {
    formTemplate.isValid(newMember).then((response) => {
      setsubmitDisabled(!response);
      console.log(response);
    });
  }, [newMember]);

  function checkError(name, value) {
    Yup.reach(formTemplate, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", newMember)
      .then((response) => {
        setRegisteredMember(response.data);
        console.log(registeredMember);
        setRegisterBoolean(true);
      })
      .catch((err) => {
        setDatabaseError(err);
        setRegisterBoolean(false);
      });
  }

  return (
    <div>
      <Form
        submitDisabled={submitDisabled}
        newMember={newMember}
        setNewMember={setNewMember}
        checkError={checkError}
        setErrorBoolean={setErrorBoolean}
        handleSubmit={handleSubmit}
        setRegisteredMember={setRegisteredMember}
        setRegisterBoolean={setRegisterBoolean}
      />
      <Error errorBoolean={errorBoolean} errors={errors}></Error>
      <Register
        registerBoolean={registerBoolean}
        setRegisterBoolean={setRegisterBoolean}
        registeredMember={registeredMember}
      ></Register>
    </div>
  );
}

export default App;