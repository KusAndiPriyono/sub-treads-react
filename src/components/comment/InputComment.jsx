import { useDispatch } from 'react-redux';
import { asyncAddComment } from '../../states/threadDetail/action';
import { Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

function InputComment({ threadId }) {
  const [content, setValue] = useState('');
  const dispatch = useDispatch();

  const onChange = (e) => {
    const html = e.target.value;
    setValue(html);
  };

  const onAddComment = () => {
    dispatch(asyncAddComment(threadId, content));
  };

  return (
    <form>
      <TextField
        onChange={onChange}
        multiline
        variant='outlined'
        inputProps={{ 'data-testid': 'comment-input_field' }}
      />
      <Button variant='contained' onClick={() => onAddComment()}>
        Send
      </Button>
    </form>
  );
}

InputComment.propTypes = {
  threadId: PropTypes.string.isRequired,
};

export default InputComment;
