export const SET_USER = 'SET_USER';

export interface UserAction {
  type: typeof SET_USER;
  email: string;
  nickname: string;
  id: string;
}

export const setUser = (
  email: string,
  nickname: string,
  id: string,
): UserAction => {
  return {
    type: SET_USER,
    email,
    nickname,
    id,
  };
};
