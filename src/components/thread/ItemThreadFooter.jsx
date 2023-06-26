import { useDispatch } from 'react-redux';
import {
  asyncDownVoteThread,
  asyncUpVoteThread,
} from '../../states/thread/action';
import { Box } from '@mui/material';
import ActionButton from '../ActionButton';
import { Comment } from '@mui/icons-material';
import { postedAt } from '../../utils/postedAt';
import PropTypes from 'prop-types';

function ItemThreadFooter({
  id,
  createdAt,
  totalComments,
  upVotesBy,
  downVotesBy,
}) {
  const dispatch = useDispatch();

  const onUpVoteThread = () => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVoteThread = () => {
    dispatch(asyncDownVoteThread(id));
  };

  return (
    <Box>
      <ActionButton
        type='up'
        count={upVotesBy.length}
        onButtonClicked={onUpVoteThread}
      />
      <ActionButton
        type='down'
        count={downVotesBy.length}
        onButtonClicked={onDownVoteThread}
      />
      <span>
        <Comment /> {totalComments} comments
      </span>
      <span>{postedAt(createdAt)}</span>
    </Box>
  );
}

ItemThreadFooter.propTypes = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ItemThreadFooter;
