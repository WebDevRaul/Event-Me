export const isJoined = ({ members, _id }) => {
  const joined = members.filter(memb => memb._id === _id).length;
  return { joined }
}