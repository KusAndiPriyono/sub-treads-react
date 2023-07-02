import { useDispatch } from "react-redux";
import {
  asyncToggleDownThreadDetail,
  asyncToggleUpThreadDetail,
} from "../../states/threadDetail/action";
import { Box, Typography } from "@mui/material";
import ActionButton from "../ActionButton";
import PropTypes from "prop-types";
import { detailProp } from "../../utils/propHelper";

function DetailThreadFooter({ detail }) {
  const { upVotesBy, downVotesBy } = detail;
  const { comments } = detail;

  const dispatch = useDispatch();

  const onUpVoteThread = () => {
    dispatch(asyncToggleUpThreadDetail());
  };

  const onDownVoteThread = () => {
    dispatch(asyncToggleDownThreadDetail());
  };

  return (
    <Box sx={{ m: 2, display: "flex", alignItems: "center" }}>
      <ActionButton
        type="up"
        count={upVotesBy.length}
        onButtonClicked={onUpVoteThread}
      />
      <ActionButton
        type="down"
        count={downVotesBy.length}
        onButtonClicked={onDownVoteThread}
      />
      <Typography sx={{ ml: 1 }}>{`Comments (${comments.length})`}</Typography>
    </Box>
  );
}

DetailThreadFooter.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};

export default DetailThreadFooter;
