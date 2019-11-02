export const isJoined = ({ members, user_id }) => {
  const joined = members.filter(memb => memb.user_id === user_id).length;
  return { joined }
}