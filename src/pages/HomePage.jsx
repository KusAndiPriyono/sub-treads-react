import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { useEffect } from 'react';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import ListCategory from '../components/category/ListCategory';
import ListThreads from '../components/thread/ListThreads';
import { Box } from '@mui/material';

const drawerWidth = 240;

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const [category, onChangeCategory] = useInput('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const listThread = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  const filteredThreads = listThread.filter(
    (thread) => thread.category === category
  );

  return (
    <Box
      position='absolute'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: 'grey.300',
      }}
    >
      <ListCategory onChangeCategory={onChangeCategory} />
      {category === '' || category === ' ' ? (
        <ListThreads listThread={listThread} />
      ) : (
        <ListThreads listThread={filteredThreads} />
      )}
    </Box>
  );
}

export default HomePage;
