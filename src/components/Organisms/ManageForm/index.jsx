import React from 'react';
import Form from 'components/Molecules/Form';
import {
  RegisterFormContainer,
  CardContainer,
  TitleContainer,
  Title,
} from './styles';

function ManageForm({
  formType,
  handleSave,
  initialValues,
}) {
  const getTitle = () => {
    if(formType == 'add'){
      return 'Add Contact to User'
    }
    if(formType == 'edit'){
      return 'Edit Contact or User'
    }
  }
  
  return (
    <RegisterFormContainer>
      <CardContainer>
        <TitleContainer>
          <Title>${getTitle()}</Title>
        </TitleContainer>
        <Form onSave={handleSave} initialValues={initialValues}/>
      </CardContainer>
    </RegisterFormContainer>
  )
}

export default ManageForm;