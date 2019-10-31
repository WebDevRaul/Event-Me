import { createSelector } from 'reselect';

const select_isAuth_state = state => state.user.isAuth;
const select_user_state = state => state.user.info;

export const state_isAuth = createSelector(
  [select_isAuth_state],
  state => state
);
export const state_user_name = createSelector(
  [select_user_state],
  state => state.name
);