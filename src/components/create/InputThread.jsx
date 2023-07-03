import { Box, Button, TextField, Typography } from '@mui/material';
import useInput from '../../hooks/useInput';
import PropTypes from 'prop-types';
import { useState } from 'react';
import CircularLoading from '../Loading';

function InputThread({ onCreate }) {
  const [title, setTitleChange] = useInput('');
  const [category, setCategoryChange] = useInput('');
  const [body, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleCreate = () => {
    if (title === '' || category === '' || body === '') {
      window.alert('Please fill in all fields');
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        onCreate({ title, category, body });
      }, 3000);
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
      <CircularLoading isLoading={isLoading}>
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
      </CircularLoading>
    </Box>
  );
}

InputThread.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default InputThread;
