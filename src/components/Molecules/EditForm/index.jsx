import React, { useState } from 'react';
import CoffeeSelect from 'components/Atoms/CoffeeSelect';
import { deleteMeetings, saveMeeting, loadMeetings } from 'ducks/meetings';
import { useSelector, useDispatch } from 'react-redux';
import {
  TextField,
  Button,
  Stack
} from "@mui/material";

import {
  FormContainer,
  InputFieldsContainer,
  NameContainer,
} from './styles';
import { convertUTCDateToLocalDate } from 'util/DateTimeAdapter';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useEffect } from 'react';

function EditForm({
  initialValues,
  removeForm,
}) {
  const {
    successSaveMeeting,
    successDeleteMeeting
  } = useSelector(store => store.meetings);
  const dispatch = useDispatch();
  const [initialValuesView, setInitialValuesView] = useState(initialValues);
  const [meetingId, setMeetingId] = useState(initialValues.meetingId);
  const [title, setTitle] = useState(initialValues.title);
  const [startDate, setStartDate] = useState(initialValues.startDate);
  const [endDate, setEndDate] = useState(initialValues.endDate);
  const [responsibleName, setResponsibleName] = useState(initialValues.responsibleName);
  const [coffeeQuantity, setCoffeeQuantity] = useState(initialValues.coffeeQuantity);
  const [description, setDescription] = useState(initialValues.description);
  const [needsCoffee, setNeedsCoffee] = useState((coffeeQuantity == 0));

  const editMeeting = async () => {
    const data = {
      meetingId: meetingId,
      meetingData: {
        title,
        startDate,
        endDate,
        responsibleName,
        coffeeQuantity,
        description
      }
    }
    dispatch(saveMeeting(data));
    removeForm(true);
  };

  const deleteMeeting = async () => {
    const data = [meetingId];
    dispatch(deleteMeetings(data));
    removeForm(true);
  };

  return (
    <FormContainer>
      <InputFieldsContainer>
        <NameContainer>
          <TextField 
            label="Title" 
            variant="standard" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            multiline
            maxRows={4}
            fullWidth
          />
        </NameContainer>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Start Date"
            value={startDate}
            ampm={false}
            onChange={(e) => { setStartDate(e); }}
          /> 
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="End Date"
            value={endDate}
            ampm={false}
            onChange={(e) => { setEndDate(e) }}
          />
        </LocalizationProvider>
        <TextField 
          label="Responsible" 
          variant="standard"
          value={responsibleName}
          onChange={(e) => setResponsibleName(e.target.value)}
          fullWidth
        />
        <Stack direction="row" spacing={2}>
          <CoffeeSelect onChange={setNeedsCoffee}/>
          <TextField 
            label="Number of Attendants"
            type="number" 
            variant="standard"
            value={coffeeQuantity}
            disabled={needsCoffee}
            onChange={(e) => setCoffeeQuantity(e.target.value)}
            fullWidth
          />
        </Stack>
        <TextField
          label="Description" 
          variant="standard" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          maxRows={4}
          fullWidth
        />
      </InputFieldsContainer>
      <Stack direction="row" spacing={2}>
        <Button 
          variant="contained" 
          onClick={editMeeting} 
        >
          Save
        </Button>
        <Button 
          variant="outlined" 
          onClick={deleteMeeting}
        >
          Excluir
        </Button>
      </Stack>
    </FormContainer>
  )
}

export default EditForm;