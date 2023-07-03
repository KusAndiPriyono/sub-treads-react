import { useDispatch } from 'react-redux';
import {
  asyncToggleDownThreadDetail,
  asyncToggleUpThreadDetail,
} from '../../states/threadDetail/action';
import { Box, CardContent } from '@mui/material';
import ActionButton from '../ActionButton';
import PropTypes from 'prop-types';
import { detailProp } from '../../utils/propHelper';

function DetailThreadFooter({ detail }) {
  const { upVotesBy, downVotesBy } = detail;

  const dispatch = useDispatch();

  const onUpVoteThread = () => {
    dispatch(asyncToggleUpThreadDetail());
  };

  const onDownVoteThread = () => {
    dispatch(asyncToggleDownThreadDetail());
  };

  return (
    <Box sx={{ ml: 2 }}>
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
    </Box>
  );
}

DetailThreadFooter.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};

export default DetailThreadFooter;
