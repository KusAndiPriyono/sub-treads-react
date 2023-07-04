/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboard } from '../states/leaderboard/action';
import { Box, Grid, Paper, Typography } from '@mui/material';
import ListLeaderboard from '../components/leaderboard/ListLeaderboard';

const drawerWidth = 240;

function LeaderboardPage() {
  const { leaderboards = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);

  const leaderboardList = leaderboards.map((leaderboard) => ({
    ...leaderboard,
  }));

  return (
    <Box
      position='absolute'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: 'grey.300',
      }}
    >
      <Typography sx={{ m: 2 }} component='h1' variant='h5'>
        Top User
      </Typography>
      <Grid sx={{ m: 2 }}>
        <Paper>
          <ListLeaderboard leaderboardList={leaderboardList} />
        </Paper>
      </Grid>
    </Box>
  );
}

export default LeaderboardPage;
