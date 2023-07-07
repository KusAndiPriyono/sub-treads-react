/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/**
 * test scenario for thread reducer
 *
 * - threadReducers function
 * - should return the initial state when given by unknown action
 * - should return the threads when given by RECEIVE_THREADS action
 * - should return the threads with the new thread when given by CREATE_THREAD action
 * - should return the threads with the toggled like thread when given by UPVOTE_THREAD action
 * - should return the threads with the toggled like thread when given by DOWNVOTE_THREAD action
 * - should return the threads with the toggled like thread when given by CLEAR_VOTE_THREAD action
 */

import { ActionType } from './action';
import threadReducer from './reducer';

describe('threadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_THREADS,
      payload: {
        threads: [
          {
            id: 'thread-6WiuiJ-F8jX1z3X4',
            title: 'testing',
            body: 'testing',
            category: 'testing',
            createdAt: '2023-07-06T14:37:45.594Z',
            ownerId: 'user-B0boVVlTvdT7cRPn',
            totalComments: 0,
            upVotesBy: ['user-B0boVVlTvdT7cRPn', 'user-BK_qgRwuZx_zCzI2'],
            downVotesBy: [],
          },
          {
            id: 'thread-EIsaKDCb_uf1x4A6',
            title: 'Pengalaman Bootcamp',
            body: 'Ceritakan pengalaman anda selama mengikuti bootcamp?',
            category: 'front-end',
            createdAt: '2023-07-06T14:44:34.561Z',
            ownerId: 'user-BK_qgRwuZx_zCzI2',
            totalComments: 0,
            upVotesBy: ['user-BK_qgRwuZx_zCzI2', 'user-B0boVVlTvdT7cRPn'],
            downVotesBy: [],
          },
        ],
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by CREATE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-6WiuiJ-F8jX1z3X4',
        title: 'testing',
        body: 'testing',
        category: 'testing',
        createdAt: '2023-07-06T14:37:45.594Z',
        ownerId: 'user-B0boVVlTvdT7cRPn',
        totalComments: 0,
        upVotesBy: ['user-B0boVVlTvdT7cRPn', 'user-BK_qgRwuZx_zCzI2'],
        downVotesBy: [],
      },
    ];
    const action = {
      type: ActionType.CREATE_THREAD,
      payload: {
        thread: {
          id: 'thread-EIsaKDCb_uf1x4A6',
          title: 'Pengalaman Bootcamp',
          body: 'Ceritakan pengalaman anda selama mengikuti bootcamp?',
          category: 'front-end',
          createdAt: '2023-07-06T14:44:34.561Z',
          ownerId: 'user-BK_qgRwuZx_zCzI2',
          totalComments: 0,
          upVotesBy: ['user-BK_qgRwuZx_zCzI2', 'user-B0boVVlTvdT7cRPn'],
          downVotesBy: [],
        },
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the threads with the toggled like thread when given by UPVOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-6WiuiJ-F8jX1z3X4',
        title: 'testing',
        body: 'testing',
        category: 'testing',
        createdAt: '2023-07-06T14:37:45.594Z',
        ownerId: 'user-B0boVVlTvdT7cRPn',
        totalComments: 0,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: ActionType.UPVOTE_THREAD,
      payload: {
        threadId: 'thread-6WiuiJ-F8jX1z3X4',
        userId: 'user-BK_qgRwuZx_zCzI2',
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with the toggled like thread when given by DOWNVOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-6WiuiJ-F8jX1z3X4',
        title: 'testing',
        body: 'testing',
        category: 'testing',
        createdAt: '2023-07-06T14:37:45.594Z',
        ownerId: 'user-B0boVVlTvdT7cRPn',
        totalComments: 0,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: ActionType.DOWNVOTE_THREAD,
      payload: {
        threadId: 'thread-6WiuiJ-F8jX1z3X4',
        userId: 'user-BK_qgRwuZx_zCzI2',
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with the toggled like thread when given by CLEAR_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-6WiuiJ-F8jX1z3X4',
        title: 'testing',
        body: 'testing',
        category: 'testing',
        createdAt: '2023-07-06T14:37:45.594Z',
        ownerId: 'user-B0boVVlTvdT7cRPn',
        totalComments: 0,
        upVotesBy: ['user-test'],
        downVotesBy: ['user-test'],
      },
    ];
    const action = {
      type: ActionType.CLEAR_VOTE_THREAD,
      payload: {
        threadId: 'thread-6WiuiJ-F8jX1z3X4',
        userId: 'user-test',
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [],
      },
    ]);
  });
});
