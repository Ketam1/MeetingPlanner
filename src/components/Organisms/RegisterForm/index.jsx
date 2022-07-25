import React from 'react';
import Form from 'components/Molecules/Form';
import {
  RegisterFormContainer,
  CardContainer,
  TitleContainer,
  Title,
} from './styles';

function RegisterForm() {

  const saveUser = (user) => {
    // dispatch User To Backend
  }
  
  return (
    <RegisterFormContainer>
      <CardContainer>
        <TitleContainer>
          <Title>Register User</Title>
        </TitleContainer>
        <Form onSave={saveUser} />
      </CardContainer>
    </RegisterFormContainer>
  )
}

export default RegisterForm;