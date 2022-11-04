import React, { useState } from 'react';
import {
  CoffeeOutlined,
  Coffee,
} from '@mui/icons-material';

import {
  CoffeeContainer,
} from './styles';

function CoffeeSelect({
  onChange,
  selected
}) { 
  const [isSelected, setIsSelected] = useState(selected);

  const changeStates = () => {
    onChange(isSelected);
    setIsSelected(!isSelected);
  };

  return (
    <>
      <CoffeeContainer
        onClick={changeStates}
      >
        {isSelected ? ( <Coffee/> ) : ( <CoffeeOutlined/> )}
      </CoffeeContainer>
    </>
  )
};

export default CoffeeSelect;