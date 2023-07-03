import { Box, Typography } from '@mui/material';
import InputComment from '../comment/InputComment';
import { detailProp } from '../../utils/propHelper';
import PropTypes from 'prop-types';

function DetailThreadComment({ detail }) {
  const { comments } = detail;

  return (
    <Box>
      <Typography>Add Comment</Typography>
      <InputComment threadId={detail.id} />
      <Box>{`Comments (${comments.length})`}</Box>
    </Box>
  );
}

DetailThreadComment.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};

export default DetailThreadComment;
