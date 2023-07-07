/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Box, Typography } from '@mui/material';
import InputComment from '../comment/InputComment';
import { detailProp } from '../../utils/propHelper';
import PropTypes from 'prop-types';
import ListComment from '../comment/ListComment';

function DetailThreadComment({ detail }) {
  const { comments } = detail;

  return (
    <Box sx={{ m: 2 }}>
      <Typography sx={{ mt: 1 }}>Tambahkan Komentar</Typography>
      <InputComment threadId={detail.id} />

      <Box>
        <Typography>{`Komentar (${comments.length})`}</Typography>
        <ListComment comments={comments} />
      </Box>
    </Box>
  );
}

DetailThreadComment.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};

export default DetailThreadComment;
