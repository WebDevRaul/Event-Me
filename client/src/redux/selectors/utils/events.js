export  const privateEvents = state => {
  const { events } = state.eventMe;
  const { user_id } = state.user.info;
  return events.filter(i => i.author._id === user_id)
}