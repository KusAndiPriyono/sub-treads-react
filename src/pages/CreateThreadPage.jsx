/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createThread } from '../states/thread/action';
import InputThread from '../components/create/InputThread';
import { Box } from '@mui/material';

const drawerWidth = 240;

function CreateThreadPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onCreate = ({ title, body, category }) => {
    dispatch(createThread({ title, body, category }));
    navigate('/');
  };

  return (
    <Box
      position='absolute'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <InputThread onCreate={onCreate} />
    </Box>
  );
}

export default CreateThreadPage;
