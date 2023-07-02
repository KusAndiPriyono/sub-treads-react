import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import usersReducer from './users/reducer';
import threadReducer from './thread/reducer';
import threadDetailReducer from './threadDetail/reducer';
import leaderboardsReducer from './leaderboard/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPeload: isPreloadReducer,
    users: usersReducer,
    threads: threadReducer,
    threadDetail: threadDetailReducer,
    leaderboards: leaderboardsReducer,
  },
});

export default store;
