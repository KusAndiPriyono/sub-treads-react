/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import { Box, Card } from '@mui/material';
import DetailThreadHeader from '../components/threadDetail/DetailThreadHeader';
import DetailThreadContent from '../components/threadDetail/DeatilThreadContent';
import DetailThreadFooter from '../components/threadDetail/DetailThreadFooter';
import DetailThreadComment from '../components/threadDetail/DetailThreadComment';
import CircularLoading from '../components/Loading';

const drawerWidth = 240;

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null } = useSelector((states) => states);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      dispatch(asyncReceiveThreadDetail(id))
        .then(() => setIsLoading(false))
        .catch((error) => {
          setIsLoading(false);
          console.log('Failed to fetch thread detail:', error);
        });
    }, 1000);

    return () => {
      clearTimeout();
    };
  }, [id, dispatch]);

  if (!threadDetail) return null;

  return (
    <Box
      position='absolute'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <CircularLoading isLoading={isLoading}>
        <Card
          sx={{
            margin: 2,
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'black',
          }}
        >
          <DetailThreadHeader detail={threadDetail} />
          <DetailThreadContent detail={threadDetail} />
          <DetailThreadFooter detail={threadDetail} />
          <DetailThreadComment detail={threadDetail} />
        </Card>
      </CircularLoading>
    </Box>
  );
}

export default DetailPage;
