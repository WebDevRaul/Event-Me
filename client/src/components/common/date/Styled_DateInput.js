import styled from 'styled-components';

const shrink = () => `
  top: -7px;
  background: var(--mainWhite);
  border-radius: var(--BorderRadius);
  padding: 2px 10px;
  font-weight: 600;
  letter-spacing: var(--Spacing);
  left: 12px;
  font-size: .7em;
  color: var(--Green);
`

const StyledDateInput = styled.div`
  position: relative;
  .react-datepicker-wrapper {
    width: 100%;
    input {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--Shadow);
    border-radius: var(--BorderRadius);
    }
  }
  label {
    position: absolute;
    top: 11px;
    left: 12px;
    color: ${({ err }) => err ? 'var(--mainBlack)' : 'var(--Error)'};
    letter-spacing: var(--Spacing);
    text-transform: uppercase;
    font-weight: 500;
    transition: var(--Transition);
  }
  label {
    ${({ val }) => val ? shrink : null}
  }
  label {
    ${({ focus }) => focus ? shrink : null}
  }
`

export default StyledDateInput;