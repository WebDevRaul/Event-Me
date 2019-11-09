const options = [
  {value: 'red', label: 'red'},
  {value: 'blue', label: 'blue'},
  {value: 'yelow', label: 'yelow'}
];

const style = {
  multiValueLabel: styles => ({ ...styles, color: 'var(--Pcolor)' }),
  control: styles => ({
    ...styles,
    boxShadow: 'none',
    '&:hover': {
        border: '1px solid var(--Shadow)',
    },
    height: 41,
    ':hover': {cursor: 'unset !important'}
}),
  option: styles => ({
    ...styles,
    cursor: 'pointer',
    backgroundColor: null,
    ':hover': { backgroundColor: 'var(--Hover)', color: 'var(--Pcolor)'}
  }),
  multiValueRemove: styles => ({ ...styles, color: 'var(--Error)', ':hover': { backgroundColor: 'var(--Error)',color: 'var(--mainWhite)'}})
};

export { options, style };