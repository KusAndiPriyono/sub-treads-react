import { Card, CardContent } from '@mui/material';
import ItemThreadHeader from './ItemThreadHeader';
import ItemThreadFooter from './ItemThreadFooter';
import { userProp } from '../../utils/propHelper';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

function ItemThread({
  id,
  body,
  title,
  category,
  user,
  createdAt,
  totalComments,
  upVotesBy,
  downVotesBy,
}) {
  return (
    <Card
      sx={{
        mb: 2,
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: 'black',
      }}
    >
      <ItemThreadHeader
        user={user === undefined ? '' : user}
        id={id}
        title={title}
        category={category}
      />
      <CardContent>{parse(body)}</CardContent>
      <ItemThreadFooter
        createdAt={createdAt}
        totalComments={totalComments}
        upVotesBy={upVotesBy}
        downVotesBy={downVotesBy}
        id={id}
      />
    </Card>
  );
}

ItemThread.propTypes = {
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.shape(userProp).isRequired,
};

export default ItemThread;
