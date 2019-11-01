export  const privateEvents = state => {
  const { events } = state.eventMe;
  const { user_id } = state.user.info;
  return events.filter(i => i.user_id === user_id)
}