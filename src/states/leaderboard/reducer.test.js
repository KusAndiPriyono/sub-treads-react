/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/**
 * test scenario for leaderboardsReducer
 *
 * - leaderboardsReducer function
 * - should return the initial state when given by unknown action
 * - should return the leaderboards when given by leaderboards/receive action
 *
 */
import { ActionType } from './action';
import leaderboardsReducer from './reducer';

describe('leaderboardsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the leaderboards when given by leaderboards/receive action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_LEADERBOARD,
      payload: {
        leaderboards: [
          {
            user: {
              id: 'user-B0boVVlTvdT7cRPn',
              name: 'Andi',
              email: 'andi@mailsac.com',
              avatar:
                'https://ui-avatars.com/api/?name=Andi Andi&background=random',
            },
            score: 80,
          },
          {
            user: {
              id: 'user-BK_qgRwuZx_zCzI2',
              name: 'Kap',
              email: 'kap@mailsac.com',
              avatar:
                'https://ui-avatars.com/api/?name=Kap Kap&background=random',
            },
            score: 60,
          },
        ],
      },
    };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
