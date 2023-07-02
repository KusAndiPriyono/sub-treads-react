import { Box, Typography } from "@mui/material";
import InputComment from "../comment/InputComment";
import { detailProp } from "../../utils/propHelper";
import PropTypes from "prop-types";

function DetailThreadComment({ detail }) {
  return (
    <Box sx={{ m: 2 }}>
      <Typography sx={{ mt: 1 }}>Tambahkan Komentar</Typography>
      <InputComment threadId={detail.id} />
    </Box>
  );
}

DetailThreadComment.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};

export default DetailThreadComment;
