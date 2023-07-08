/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { ThumbDown, ThumbUp } from '@mui/icons-material';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

function ActionButton({ type, count, onButtonClicked }) {
  return (
    <Button type='button' onClick={onButtonClicked}>
      {type === 'up' ? <ThumbUp /> : <ThumbDown />} {count}
    </Button>
  );
}

ActionButton.propTypes = {
  type: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
};

export default ActionButton;
