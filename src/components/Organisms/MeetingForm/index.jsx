import React from 'react';
import Form from 'components/Molecules/Form';
import {
  RegisterFormContainer,
  CardContainer,
  TitleContainer,
  Title,
} from './styles';

function MeetingForm({
  formType,
  handleSave,
  initialValues,
}) {
  const getTitle = () => {
    if(formType == 'add'){
      return 'Add new meeting.'
    }
    if(formType == 'edit'){
      return 'Edit existing meeting.'
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

export default MeetingForm;