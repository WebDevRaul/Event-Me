import { createSelector } from 'reselect';
import { filter_main_photo, filter_rest_photos } from './utils/user';

const select_isAuth_state = state => state.user.isAuth;
const select_user_state = state => state.user.info;
const select_user_photos = state => state.user.info.profile.image;
const select_error_state = state => state.user.error;

export const state_isAuth = createSelector(
  [select_isAuth_state],
  state => state
);

export const state_user = createSelector(
  [select_user_state],
  state => state
);

export const state_user_name = createSelector(
  [select_user_state],
  state => state.first_name
);

export const state_user_main_photo = createSelector(
  [select_user_photos],
  state => filter_main_photo(state)
);

export const state_user_rest_photos = createSelector(
  [select_user_photos],
  state => filter_rest_photos(state)
);





export const state_user_profile = createSelector(
  [select_user_state],
  state => state.profile
);




export const state_user_photo = createSelector(
  [select_user_state],
  state => state.profile.image
)


export const state_user_error = createSelector(
  [select_error_state],
  state => state
);