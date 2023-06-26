import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { userProp } from '../../utils/propHelper';
import PropTypes from 'prop-types';

function ItemThreadHeader({ user, id, title, category }) {
  const { name, avatar } = user;

  return (
    <header>
      <img src={avatar} alt={name} />
      <span>
        {name} {''} :
      </span>

      <Link to={`/thread/${id}`}>
        <Typography>{title}</Typography>
      </Link>
      <span>{`#${category}`}</span>
    </header>
  );
}

ItemThreadHeader.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  user: PropTypes.shape(userProp).isRequired,
};

export default ItemThreadHeader;
