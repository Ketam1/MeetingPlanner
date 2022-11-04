import React, {useEffect, useState } from 'react';
import MeetingForm from 'components/Organisms/MeetingForm';
import { loadMeetings } from 'ducks/meetings';
import {
  CalendarPageContainer,
  CalendarContainer,
  LeftContainer,
  RightContainer,
} from './styles';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import calendarInteraction from '@fullcalendar/interaction';
import { useSelector, useDispatch } from 'react-redux';
import { formatMeetings } from './helper';

function CalendarPage({
  locationId,
  roomId,
}) {
  const dispatch = useDispatch();
  const [meetingsView, setMeetingsView] = useState();
  const [currentEdit, setCurrentEdit] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const {
    meetings,
    successSaveMeeting,
    successDeleteMeeting
  } = useSelector(store => store.meetings);

  useEffect(() => {
    const data = {
      locationId: [locationId],
      roomId: [roomId]
    }
    dispatch(loadMeetings(data));
  }, [locationId, roomId, successSaveMeeting, successDeleteMeeting]);

  useEffect(() => {
    setMeetingsView(formatMeetings(meetings));
  }, [meetings])

  const editEvent = ({ event }) => {
    const eventObject = event._def.extendedProps;
    const meeting = {
      meetingId: eventObject.meetingId,
      title: eventObject.title,
      startDate: eventObject.startDate,
      endDate: eventObject.endDate,
      responsibleName: eventObject.responsibleName,
      coffeeQuantity: eventObject.coffeeQuantity,
      description: eventObject.description,
    }

    setIsEditing(true);
    setIsAdding(false);
    setCurrentEdit(meeting);
  };

  const removeForm = (remove) => {
    if(remove){
      setIsAdding(false);
      setIsEditing(false);
    }
  }
  const createEvent = ({date}) => {
    const dateClicked = new Date(date);
    const endDate = new Date(date);
    endDate.setHours(dateClicked.getHours() + 1);
    const meeting = {
      startDate: dateClicked,
      endDate: new Date(endDate),
    }

    setIsEditing(false);
    setIsAdding(true);
    setCurrentEdit(meeting);
  };

  const noForms = (!isAdding && !isEditing)
  return (
    <CalendarPageContainer>
      <LeftContainer noForms={noForms}>
        <CalendarContainer>
          <FullCalendar
            timeZone='UTC'
            plugins={[ timeGridPlugin, calendarInteraction ]}
            initialView="timeGridWeek"
            events={meetingsView}
            eventClick={editEvent}
            dateClick={createEvent}
            height={"100%"}
            slotLabelFormat = {{
              hour: '2-digit',
              minute: '2-digit',
              meridiem: false,
              hour12: false
            }}
            titleFormat = {{day: 'numeric', month: 'numeric'}}
          />
        </CalendarContainer>
      </LeftContainer>
      <RightContainer noForms={noForms}>
        {!noForms && (
          <MeetingForm
            locationId={locationId}
            roomId={roomId}
            isEditing={isEditing}
            removeForm={removeForm}
            initialValues={currentEdit}
          />
        )}        
      </RightContainer>
    </CalendarPageContainer>
  );
};

export default CalendarPage;