export const filter_main_photo = state => {
  return state.filter(i => i.main === 'true')[0];
}

export const filter_rest_photos = state => {
  return state.filter(i => i.main !== 'true');
}