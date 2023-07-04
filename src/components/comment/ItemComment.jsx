/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncToggleDownComment,
  asyncToggleUpComment,
} from '../../states/threadDetail/action';
import { Box, Typography } from '@mui/material';
import { userProp } from '../../utils/propHelper';
import PropTypes from 'prop-types';
import ActionButton from '../ActionButton';
import { postedAt } from '../../utils/postedAt';
import parse from 'html-react-parser';

function ItemComment({
  id,
  owner,
  createdAt,
  content,
  upVotesBy,
  downVotesBy,
}) {
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  const upComment = () => {
    dispatch(asyncToggleUpComment(id));
  };

  const downComment = () => {
    dispatch(asyncToggleDownComment(id));
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', m: 2 }}>
        <img
          style={{ borderRadius: 50 }}
          width={40}
          height={40}
          src={`${owner.avatar}`}
          alt='avatar'
        />
        <Typography sx={{ m: 1 }}>{owner.name}</Typography>
      </Box>
      <Typography sx={{ m: 2 }}>{parse(content)}</Typography>
      <Box>
        <ActionButton
          type='up'
          authUser={authUser}
          onButtonClicked={upComment}
          count={upVotesBy.length}
        />
        <ActionButton
          type='down'
          authUser={authUser}
          onButtonClicked={downComment}
          count={downVotesBy.length}
        />
        <span>{postedAt(createdAt)}</span>
      </Box>
    </Box>
  );
}

ItemComment.propTypes = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.shape(userProp).isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ItemComment;
