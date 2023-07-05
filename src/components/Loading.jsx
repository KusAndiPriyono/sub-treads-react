/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { Box } from '@mui/material';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <Box sx={{ position: 'fixed', top: 0, zIndex: 'tooltip', width: '100%' }}>
      <LoadingBar />
    </Box>
  );
}

export default Loading;
