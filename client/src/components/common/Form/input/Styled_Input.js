import styled from 'styled-components';

const StyledInput = styled.div`
  position: relative;
  margin: 25px 0;
  .form-input {
    padding: 10px;
    width: 100%;
    border: 1px solid;
    border-color: ${({ err }) => err ? 'var(--Error)' : 'var(--Shadow)'};
    border-radius: var(--BorderRadius);
    &:focus + div > .label {
      top: -7px;
      background: var(--mainWhite);
      border-radius: var(--BorderRadius);
      padding: 2px 10px;
      font-weight: 600;
      letter-spacing: var(--Spacing);
      left: 12px;
      font-size: .7em;
      color: ${({ err }) => err ? 'var(--Error)' : 'var(--Green)'};
    }
  }

  input[type='password'] {
    letter-spacing: .3em;
  }
`

export default StyledInput;