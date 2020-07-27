import { produce } from 'immer';
import { Reducer } from 'redux';
import { ActionType, createAction, getType } from 'typesafe-actions';

import { IUser } from 'entity/user';

/*
 * state
 */
export interface IAuthState {
  token: string;
  user?: IUser;
}

const initialState: IAuthState = {
  token: '',
  user: undefined,
};

/*
 * action types
 */
const SIGN_IN = 'auth/SIGN_IN';

/*
 * action creators
 */

export const actions = {
  signIn: createAction(SIGN_IN)<{ token: string; user: IUser }>(),
};
export type TActions = ActionType<typeof actions>;

const reducer: Reducer<IAuthState, TActions> = (
  state = initialState,
  action,
) => {
  return produce<IAuthState>(state, (draft) => {
    switch (action.type) {
      case getType(actions.signIn): {
        draft.token = action.payload.token;
        draft.user = action.payload.user;
        break;
      }
    }
  });
};

export default reducer;
