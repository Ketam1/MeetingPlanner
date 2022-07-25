import React from 'react';
import RegisterForm from 'components/Organisms/RegisterForm';
import {
  RegisterPageContainer,
  LeftContainer,
  RightContainer,
  TextBox,
  Title,
  Text,
  BlueText,
} from './styles'
function RegisterPage() {
  return (
    <RegisterPageContainer>
      <LeftContainer>
        <RegisterForm />
      </LeftContainer>
      <RightContainer>
        <TextBox>
          <Title>How to use</Title>
          <Text> 
             Hello! Thanks for using my app, to start using it just fill the form on the left
             then press save, saved users will appear in the <BlueText>Manage</BlueText> tab, there you can <BlueText>add, 
             remove and edit both users and contacts.</BlueText>
          </Text>
        </TextBox>
      </RightContainer>
    </RegisterPageContainer>
  );
};

export default RegisterPage;