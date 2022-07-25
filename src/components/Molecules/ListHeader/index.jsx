import React, { useState } from 'react';
import {
  Collapse,
  List,
} from '@mui/material';
import PropTypes from 'prop-types';
import ListRow from 'components/Molecules/ListRow';

function ListHeader({
  headerTitle,
  headerId,
  subRows,
  handleAdd,
  handleDelete,
  handleEdit
}) {
  const [open, setOpen] = useState(true);

  const handleClick = (open) => {
    setOpen(open);
  };

  return (
    <>
      <ListRow
        rowTitle={headerTitle}
        rowId={headerId}
        onClick={handleClick}
        handleAdd={handleAdd}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        isHeader
      />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subRows.map(row => (
            <ListRow
              rowTitle={row.name}
              rowId={row.id}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              isSubRow
            />
          ))}
        </List>
      </Collapse>
    </>
  )
}

ListHeader.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  headerId: PropTypes.number.isRequired,
  subRows: PropTypes.object.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default ListHeader;