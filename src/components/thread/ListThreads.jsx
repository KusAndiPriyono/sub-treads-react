/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { Box } from '@mui/material';
import { threadProp } from '../../utils/propHelper';
import PropTypes from 'prop-types';
import ItemThread from './ItemThread';

function ListThreads({ listThread }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          maxWidth: 500,
        },
        width: '100%',
      }}
    >
      {listThread.map((thread, index) => (
        <ItemThread key={index} {...thread} />
      ))}
    </Box>
  );
}

ListThreads.propTypes = {
  listThread: PropTypes.arrayOf(PropTypes.shape(threadProp)).isRequired,
};

export default ListThreads;
