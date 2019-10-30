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

const StyledInput = styled.div`
  position: relative;
  margin: 25px 0;
  .form-input {
    padding: 10px;
    width: 100%;
    border: 1px solid var(--Shadow);
    border-radius: var(--BorderRadius);
    &:focus ~ .form-input-label {
      ${shrink}
    }
  }

  input[type='password'] {
    letter-spacing: .3em;
  }

  .form-input-label {
    position: absolute;
    top: 11px;
    left: 12px;
    color: var(--mainBlack);
    letter-spacing: var(--Spacing);
    text-transform: uppercase;
    font-weight: 500;
    transition: var(--Transition);
    &.shrink {
      ${shrink}
    }
  }
  .validate {
    border-color: var(--Error);
  }
  .validate + .form-input-label {
    color: var(--Error);
  }
`

export default StyledInput;