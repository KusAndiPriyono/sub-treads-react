/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Button, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';

function ItemCategory({ category, onSelect, unSelect, selected }) {
  return category === selected ? (
    <Tooltip title={`Lihat konten ${category}`}>
      <Button
        type='button'
        onClick={unSelect}
        value={category}
        sx={{ ':hover': { backgroundColor: 'lightgray' } }}
      >
        {`#${category}`}
      </Button>
    </Tooltip>
  ) : (
    <Tooltip title={`Lihat konten ${category}`}>
      <Button
        type='button'
        onClick={onSelect}
        value={category}
        sx={{ ':hover': { backgroundColor: 'lightgray' } }}
      >
        {`#${category}`}
      </Button>
    </Tooltip>
  );
}

ItemCategory.propTypes = {
  category: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  unSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default ItemCategory;
