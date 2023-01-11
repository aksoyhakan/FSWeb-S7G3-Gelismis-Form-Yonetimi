import React, { useEffect } from "react";
import styled from "styled-components";

const Register = (props) => {
  const { registerBoolean, setRegisterBoolean, registeredMember } = props;

  const SCRegisterDiv = styled.div`
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    border: 0.25rem solid green;
    transition: all 2s linear;
    display: ${(props) => (props.registerBoolean ? "block" : "none")};
  `;

  useEffect(() => {
    setTimeout(() => {
      console.log("içerde");
      setRegisterBoolean(false);
    }, 5000);
  }, [registerBoolean]);

  return (
    <SCRegisterDiv registerBoolean={registerBoolean}>
      <p>
        {registeredMember.id} kayıt numaralı {registeredMember.name} adlı
        müşterimiz başarılı bir şekilde kayıt olmuştur.
      </p>
    </SCRegisterDiv>
  );
};

export default Register;
