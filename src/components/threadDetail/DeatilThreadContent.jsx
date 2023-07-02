import { Box, CardContent } from "@mui/material";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import { detailProp } from "../../utils/propHelper";

function DetailThreadContent({ detail }) {
  const { body } = detail;

  return <Box sx={{ m: 2 }}>{parse(body)}</Box>;
}

DetailThreadContent.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};

export default DetailThreadContent;
