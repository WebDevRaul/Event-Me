export  const privateEvents = state => {
  const { events } = state.eventMe;
  const { _id } = state.user.info;
  return events.filter(i => i.author._id === _id)
}