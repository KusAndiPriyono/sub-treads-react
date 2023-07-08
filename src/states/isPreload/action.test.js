/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/**
 * skenario test
 *
 * - asyncPreloadProcess thunk
 * - should dispatch action correctly when data fetching success
 * - should dispatch action and call alert correctly when data fetching failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncPreloadProcess, setIsPreloadActionCreator } from './action';
import { setAuthUserActionCreator } from '../authUser/action';

const fakeRegisterResponse = {
  id: 'user-1',
  name: 'user-1',
  email: 'test@yahoo.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeErrorResponse = new Error('ups, something went wrong');

describe('asyncPreloadProcess thunk', () => {
  beforeEach(() => {
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api.getOwnProfile = api._getOwnProfile;

    delete api._getOwnProfile;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // Arrange
    // stub implementation
    api.getOwnProfile = () => Promise.resolve(fakeRegisterResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPreloadProcess()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setAuthUserActionCreator(fakeRegisterResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // Arrange
    //  stub implementation
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPreloadProcess()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
