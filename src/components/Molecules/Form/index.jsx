import React, { useState } from 'react';
import StarSelect from 'components/Atoms/StarSelect';
import PropTypes from 'prop-types';
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

function Form({
  onSave,
  initialValues,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [name, setName] = useState(initialValues.name);
  const [phone, setPhone] = useState(initialValues.phone);
  const [email, setEmail] = useState(initialValues.email);
  const [whatsapp, setWhatsapp] = useState(initialValues.whatsapp);

  const clearFields = () => {
    setIsFavorite(false);
    setName('');
    setPhone('');
    setEmail('');
    setWhatsapp('');
  };

  const sendFields = () => {
    let newUser = {
      name,
      phone,
      email,
      whatsapp,
      isFavorite
    };
    onSave(newUser);
  };

  return (
    <FormContainer>
      <InputFieldsContainer>
        <NameContainer>
          <TextField 
            label="name" 
            variant="standard" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </NameContainer>
        <TextField 
          label="Phone Number" 
          variant="standard"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField 
          label="E-mail" 
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField 
          label="Whatsapp" 
          variant="standard"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />
      </InputFieldsContainer>
      <Stack direction="row" spacing={2}>
        <Button 
          variant="contained" 
          onClick={sendFields} 
        >
          Save
        </Button>
        <Button 
          variant="outlined"
          onClick={clearFields}
        >
          Clear
        </Button>
      </Stack>
    </FormContainer>
  )
}

Form.propTypes = {
  onSave: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
};

Form.defaultProps = {
  initialValues: {
    name: '',
    phone: '',
    email: '',
    whatsapp: '',
  },
};

export default Form;