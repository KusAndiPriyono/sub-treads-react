/* eslint-disable import/prefer-default-export */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../thread/action';
import { receiveUsersActionCreator } from '../users/action';

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { asyncPopulateUsersAndThreads };
