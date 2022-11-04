import React, { useState } from 'react';
import CoffeeSelect from 'components/Atoms/CoffeeSelect';
import { createMeeting } from 'ducks/meetings';
import { useDispatch } from 'react-redux';
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

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function CreateForm({
  locationId,
  roomId,
  initialValues,
  removeForm,
}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [startDate, setStartDate] = useState(initialValues.startDate);
  const [endDate, setEndDate] = useState(initialValues.startDate);
  const [responsibleName, setResponsibleName] = useState();
  const [coffeeQuantity, setCoffeeQuantity] = useState();
  const [description, setDescription] = useState();
  const [needsCoffee, setNeedsCoffee] = useState(false);

  const clearFields = () => {
    setStartDate('');
    setEndDate('');
    setResponsibleName('');
    setCoffeeQuantity('');
    setDescription('');
  };

  const addMeeting = async () => {
    let meeting = {
      locationId,
      roomId,
      title,
      startDate,
      endDate,
      responsibleName,
      coffeeQuantity,
      description
    };
    dispatch(createMeeting(meeting));
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Start Date"
            value={startDate}
            onChange={(e) => { setStartDate(e); }}
          />
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="End Date"
            value={endDate}
            onChange={(e) => { setEndDate(e); }}
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
          id="outlined-multiline-static"
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
          onClick={addMeeting} 
        >
          Create
        </Button>
        <Button variant="outlined" onClick={clearFields}>
          Clear
        </Button>
      </Stack>
    </FormContainer>
  )
}

export default CreateForm;