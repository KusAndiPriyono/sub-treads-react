import { Button } from '@mui/material';
import PropTypes from 'prop-types';

function ItemCategory({ category, onSelect, unSelect, selected }) {
  return category === selected ? (
    <Button type='button' onClick={unSelect} value={category}>
      {`#${category}`}
    </Button>
  ) : (
    <Button type='button' onClick={onSelect} value={category}>
      {`#${category}`}
    </Button>
  );
}

ItemCategory.propTypes = {
  category: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  unSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default ItemCategory;
