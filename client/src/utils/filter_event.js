export const filter_event = ({ state, pathname, root }) => {
  const end_id = pathname.slice(root.length).indexOf('-');
  const event_id = pathname.slice(root.length).slice(0, end_id);
  const [event] = state.filter(i => i.id === event_id);
  return { event }
}