/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { userProp } from '../../utils/propHelper';
import PropTypes from 'prop-types';

function ItemThreadHeader({ user, id, title, category }) {
  const { name, avatar } = user;

  return (
    <>
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

      <Box sx={{ mt: 1, ml: 1 }}>
        <Link to={`/thread/${id}`}>
          <Typography>{title}</Typography>
        </Link>
        <span>{`#${category}`}</span>
      </Box>
    </>
  );
}

ItemThreadHeader.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  user: PropTypes.shape(userProp).isRequired,
};

export default ItemThreadHeader;
