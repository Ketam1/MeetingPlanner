import React, {useState} from 'react';
import MeetingForm from 'components/Organisms/MeetingForm';
import {
  ManagePageContainer,
  LeftContainer,
  RightContainer,
  TextBox,
  Title,
  Text,
  BlueText,
} from './styles';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'

function MeetingsPage() {
  function addMeeting(){};
  function editMeeting(){};

  const RightContent = (isAdding, isEditing) => {
    if(isAdding || isEditing){
      const formType = isAdding ? 'add' : 'edit';
      const saveAction = isAdding ? addMeeting : editMeeting;
      const initialValues = null;
      
      return (
        <MeetingForm 
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
             <BlueText> add, remove or edit meetings!</BlueText> To
             start using it just click on the icons in the calendar, if you choose to edit
             or add a meeting form to do so will appear here.
          </Text>
      </TextBox>
    )
  };

  return (
    <ManagePageContainer>
      <LeftContainer>
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
        />
      </LeftContainer>
      <RightContainer>
        <RightContent 
          isAdding={true}
          isEditing={null}
        />        
      </RightContainer>
    </ManagePageContainer>
  );
};

export default MeetingsPage;