import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import usersReducer from './users/reducer';
import threadReducer from './thread/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPeload: isPreloadReducer,
    users: usersReducer,
    threads: threadReducer,
  },
});

export default store;
