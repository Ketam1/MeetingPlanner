import React, {useState, useEffect} from 'react';
import EditForm from 'components/Molecules/EditForm';
import CreateForm from 'components/Molecules/CreateForm';

import {
  RegisterFormContainer,
  CardContainer,
  TitleContainer,
  Title,
} from './styles';


function MeetingForm({
  isEditing,
  initialValues,
  locationId,
  roomId,
  removeForm,
}) {
  const [initialValuesView, setInitialValuesView] = useState(initialValues);

  useEffect(() => {
    setInitialValuesView(initialValues);
    console.log(initialValuesView);
  }, [initialValues]);
  return (
    <RegisterFormContainer>
      <CardContainer>
        {
          isEditing ? 
            ( 
              <EditForm
                  initialValues={initialValues}
                  removeForm={removeForm}
                />
            ) : 
            ( 
              <CreateForm
                initialValues={initialValues}
                locationId={locationId}
                roomId={roomId}
                removeForm={removeForm}
              />
            )
        }
      </CardContainer>
    </RegisterFormContainer>
  )
}

export default MeetingForm;