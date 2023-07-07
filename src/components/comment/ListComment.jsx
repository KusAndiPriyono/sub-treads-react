/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { Box, Divider } from '@mui/material';
import ItemComment from './ItemComment';
import { commentProp } from '../../utils/propHelper';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

function ListComment({ comments }) {
  return (
    <Box>
      {comments.map((comment, index) => (
        <Fragment key={comment.id}>
          <ItemComment {...comment} />
          {index !== comments.length - 1 && (
            <Divider sx={{ borderTop: '1px solid black' }} />
          )}
        </Fragment>
      ))}
    </Box>
  );
}

ListComment.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentProp)).isRequired,
};

export default ListComment;
