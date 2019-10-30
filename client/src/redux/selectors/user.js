import { createSelector } from 'reselect';

const select_isAuth_state = state => state.user.isAuth;

export const state_isAuth = createSelector(
  [select_isAuth_state],
  state => state
);