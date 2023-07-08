/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
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
    loadingBar: loadingBarReducer,
  },
});

export default store;
