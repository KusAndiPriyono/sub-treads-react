import { useDispatch } from 'react-redux';
import { asyncAddComment } from '../../states/threadDetail/action';
import { Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

function InputComment({ threadId }) {
  const [content, setValue] = useState('');
  const dispatch = useDispatch();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onAddComment = () => {
    dispatch(asyncAddComment(threadId, content));
  };

  return (
    <form>
      <TextField
        onInput={onChange}
        multiline
        rows={4}
        value={content}
        sx={{ width: '100%' }}
      />
      <Button sx={{ m: 2 }} variant='contained' onClick={() => onAddComment()}>
        Send
      </Button>
    </form>
  );
}

InputComment.propTypes = {
  threadId: PropTypes.string.isRequired,
};

export default InputComment;
