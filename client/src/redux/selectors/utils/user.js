export const filter_main_photo = state => {
  return state.filter(i => i.public_id === '0')[0];
}

export const filter_rest_photos = state => {
  const { secure_url } = state.filter(i => i.public_id === '0')[0];
  return state.filter(i => i.public_id !== '0' && i.secure_url !== secure_url);
}