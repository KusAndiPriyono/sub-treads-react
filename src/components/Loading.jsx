import { Backdrop, Box, CircularProgress } from '@mui/material';

export default function CircularLoading({ isLoading, children }) {
  return (
    <Box position='relative'>
      {isLoading && (
        <Backdrop
          open={true}
          sx={{ zIndex: 9999, backdropFilter: 'blur(8px)' }}
        >
          <CircularProgress size={80} color='primary' />
        </Backdrop>
      )}
      {children}
    </Box>
  );
}
