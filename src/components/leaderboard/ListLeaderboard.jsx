import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { leaderboardProp } from '../../utils/propHelper';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

function ListLeaderboard({ leaderboardList }) {
  return (
    <Fragment>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>
              <Box fontWeight='bold' fontSize='larger'>
                Foto
              </Box>
            </TableCell>
            <TableCell>
              <Box fontWeight='bold' fontSize='larger'>
                User
              </Box>
            </TableCell>
            <TableCell>
              <Box fontWeight='bold' fontSize='larger'>
                Score
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderboardList.map((leaderboard) => (
            <TableRow key={leaderboard.user.id}>
              <TableCell>
                <img
                  style={{ borderRadius: '50%', width: '50px', height: '50px' }}
                  src={leaderboard.user.avatar}
                  alt='avatar'
                />
              </TableCell>
              <TableCell>{leaderboard.user.name}</TableCell>
              <TableCell>{leaderboard.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
}

ListLeaderboard.propTypes = {
  leaderboardList: PropTypes.arrayOf(PropTypes.shape(leaderboardProp))
    .isRequired,
};

export default ListLeaderboard;
