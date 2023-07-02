import { ThumbDown, ThumbUp } from '@mui/icons-material';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

function ActionButton({ type, count, onButtonClicked }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onButtonClicked();
  };

  const buttonColor = isClicked ? 'secondary' : 'primary';

  return (
    <Button type='button' onClick={handleClick} color={buttonColor}>
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
