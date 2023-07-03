import { Box, CardContent, Typography } from '@mui/material';
import { detailProp } from '../../utils/propHelper';
import { postedAt } from '../../utils/postedAt';
import PropTypes from 'prop-types';

function DetailThreadHeader({ detail }) {
  const { name, avatar } = detail.owner;
  const { title, category, createdAt } = detail;

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, ml: 1 }}>
        <img
          src={avatar}
          alt={name}
          style={{ borderRadius: 50 }}
          width={40}
          height={40}
        />
        <span style={{ marginLeft: 10 }}>
          {name} {''} :
        </span>
      </Box>
      <Box sx={{ ml: 2 }}>
        <p>{postedAt(createdAt)}</p>
        <Typography variant='h5'>{title}</Typography>
        <Typography variant='h6'>{`#${category}`}</Typography>
      </Box>
    </Box>
  );
}

DetailThreadHeader.propTypes = {
  detail: PropTypes.shape(detailProp).isRequired,
};

export default DetailThreadHeader;
