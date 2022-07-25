import React, { useState } from 'react';
import {
  StarOutline,
  Star,
} from '@mui/icons-material';

import {
  StarContainer,
} from './styles';

function StarSelect({
  onChange,
  selected
}) { 
  const [isSelected, setIsSelected] = useState(selected);

  const StarIcon = (isSelected) => {
    if(isSelected){
      return (
        <Star/> 
      );
    } else {
      return (
        <StarOutline />
      );
    }
  };

  return (
    <>
      <StarContainer
        onClick={setIsSelected(!isSelected)}
      >
        <StarIcon isSelected={isSelected} />
      </StarContainer>
    </>
  )
};

export default StarSelect;