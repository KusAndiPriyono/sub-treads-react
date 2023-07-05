/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-alert */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { Box, Button, TextField, Typography } from '@mui/material';
import useInput from '../../hooks/useInput';
import PropTypes from 'prop-types';
import { useState } from 'react';

function InputThread({ onCreate }) {
  const [title, setTitleChange] = useInput('');
  const [category, setCategoryChange] = useInput('');
  const [body, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleCreate = () => {
    if (title === '' || category === '' || body === '') {
      window.alert('Please fill in all fields');
    } else {
      onCreate({ title, category, body });
    }
  };

  return (
    <Box
      sx={{
        m: 2,
        alignItems: 'center',
        '& > :not(style)': {
          maxWidth: 500,
        },
        width: '100%',
      }}
    >
      <Typography>Create New Thread</Typography>

      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <TextField
          placeholder='Title'
          value={title}
          onChange={setTitleChange}
        />
        <TextField
          placeholder='Category'
          value={category}
          onChange={setCategoryChange}
        />
        <TextField
          placeholder='Apa yang anda pikirkan?'
          onInput={onChange}
          multiline
          rows={4}
          value={body}
        />
        <Button
          variant='contained'
          onClick={handleCreate}
          sx={{ width: 'fit-content' }}
        >
          Create
        </Button>
      </form>
    </Box>
  );
}

InputThread.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default InputThread;
