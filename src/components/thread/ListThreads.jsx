import { Box } from '@mui/material';
import { threadProp } from '../../utils/propHelper';
import PropTypes from 'prop-types';
import ItemThread from './ItemThread';

function ListThreads({ listThread }) {
  return (
    <Box>
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
