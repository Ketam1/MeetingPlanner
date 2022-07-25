import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Add,
  Delete,
  Edit,
  ExpandMore,
  ExpandLess,
} from '@mui/icons-material';

import {
  ListButton,
  ListText,
  RightArrow
} from './styles';

function ListRow({
  isHeader,
  onClick,
  rowTitle,
  rowId,
  isSubRow,
  handleAdd,
  handleDelete,
  handleEdit,
}) {
  const [isOpen, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!isOpen);
    onClick(!isOpen);
  };

  const onDelete = (personId) => {
    handleDelete(personId)
  }

  const onAdd = (personId) => {
    handleAdd(personId);
  }

  const onEdit = (personId) => {
    handleEdit(personId);
  }

  const ChevronIcon = (isOpen) => {
    return isOpen.isOpen ? <ExpandLess /> : <ExpandMore />
  };

  return (
    <ListButton onClick={handleClick} isSubRow={isSubRow}>
      {isHeader && <ChevronIcon isOpen={isOpen}/>}
      {!isHeader && <RightArrow />}
      <ListText primary={rowTitle} isSubRow={isSubRow}/>
      {isHeader && <Add onClick={onAdd(rowId)}/>}
      <Delete onClick={onDelete(rowId)}/>
      <Edit onClick={onEdit(rowId)}/>
    </ListButton>
  )
}

ListRow.propTypes = {
  isHeader: PropTypes.bool,
  onClick: PropTypes.func,
  rowTitle: PropTypes.string.isRequired,
  rowId: PropTypes.number.isRequired,
  isSubRow: PropTypes.bool,
  handleAdd: PropTypes.func,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

ListRow.defaultProps = {
  isHeader: false,
  isSubRow: false,
  handleAdd: () => {},
  onClick: () => {},
};

export default ListRow;