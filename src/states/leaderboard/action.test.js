/* eslint-disable prettier/prettier */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/**
 * test scenario for asyncReciveLeaderboards
 *
 * - asyncReciveLeaderboards function
 * - should dispatch action correctly when data fetching success
 * - should dispatch action and call alert correctly when data fetching failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  asyncReceiveLeaderboard,
  receiveLeaderboardActionCreator,
} from './action';

const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@mailsac.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 35,
  },
  {
    user: {
      id: 'users-2',
      name: 'Jane Doe',
      email: 'jane@mailsac.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 30,
  },
];

const fakeErrorResponse = new Error('oops! something went wrong');

describe('asyncReceiveLeaderboards function', () => {
  beforeEach(() => {
    api._getLeaderboard = api.getLeaderboard;
  });

  afterEach(() => {
    api.getLeaderboard = api._getLeaderboard;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getLeaderboard = () => Promise.resolve(fakeLeaderboardsResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncReceiveLeaderboard()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardActionCreator(fakeLeaderboardsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getLeaderboard = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // mock alert
    window.alert = jest.fn();

    // action
    await asyncReceiveLeaderboard()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
