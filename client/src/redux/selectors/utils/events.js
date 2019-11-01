export  const privateEvents = state => {
  const { events } = state.eventMe;
  const { id } = state.user.info;
  return events.filter(i => i.user_id === id)
}