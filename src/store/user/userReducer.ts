import { SET_USER, UserAction } from './userActions';

interface UserState {
  email: string;
  nickname: string;
  id: string;
}

const initialUser = {
  email: '',
  nickname: '',
  id: '',
};

export type Actions = UserAction;

export const userReducer = (
  state: UserState = initialUser,
  action: Actions,
): UserState => {
  switch (action.type) {
    case SET_USER:
      return { email: action.email, nickname: action.nickname, id: action.id };
    default:
      return state;
  }
};
