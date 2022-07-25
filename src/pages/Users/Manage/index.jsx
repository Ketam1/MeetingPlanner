import React, {useState} from 'react';
import UsersList from 'components/Organisms/UsersList';
import ManageForm from 'components/Organisms/ManageForm';
import {
  ManagePageContainer,
  LeftContainer,
  RightContainer,
  TextBox,
  Title,
  Text,
  BlueText,
} from './styles';

function ManagePage() {
  const [isEditing, setIsEditing] = useState();
  const [isAdding, setIsAdding] = useState();
  const [personId, setPersonId] = useState();
  const [personInfo, setPersonInfo] = useState();

  const handleAdd = (personId) => {
    setIsAdding(true);
    setPersonId(personId);
  }

  const handleDelete = (personId) => {
    
  }

  const handleEdit = (personId) => {
    setIsEditing(true);
    setPersonId(personId);
    setPersonInfo();
  }

  const addUser = (user) => {
    // chama o backend
  }

  const editUser = (user) => {
    // chama o backend
  }

  const RightContent = (isAdding, isEditing) => {
    if(isAdding || isEditing){
      const formType = isAdding ? 'add' : 'edit';
      const saveAction = isAdding ? addUser : editUser;
      const initialValues = isEditing ? personInfo : null;
      
      return (
        <ManageForm 
          formType={formType}
          handleSave={saveAction}
          initialValues={initialValues}
        />
      );
    }

    return ( 
      <DefaultText /> 
    );
  }

  const DefaultText = () => {
    return (
      <TextBox>
        <Title>How to use</Title>
          <Text> 
             Hello again! This is the <BlueText>Manage</BlueText> tab, here you can
             <BlueText> add, remove and edit both users and contacts.</BlueText> To
             start using it just click on the icons of the list, if you choose to edit
             a user or contact the form to edit it will appear here.
          </Text>
      </TextBox>
    )
  };

  const Form = () => {
    
  };

  return (
    <ManagePageContainer>
      <LeftContainer>
        <UsersList 
          handleAdd={handleAdd}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </LeftContainer>
      <RightContainer>
        <RightContent 
          isAdding={isAdding}
          isEditing={isEditing}
        />        
      </RightContainer>
    </ManagePageContainer>
  );
};

export default ManagePage;