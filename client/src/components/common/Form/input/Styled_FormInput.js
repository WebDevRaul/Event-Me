import styled from 'styled-components';

const StyledInput = styled.div`
  position: relative;
  margin: 25px 0;
  .input {
    position: relative;
    width: 100%;
    padding: 10px;
    color: var(--primary);
    background: transparent;
    font-weight: 600;
    border: 1px solid;
    border-color: ${({ val, err }) => err ? 'var(--red)' : val ? 'var(--green)' : 'var(--darkWhite)'};
    border-radius: var(--border);
    z-index: 10;
    :focus {
      border-color: var(--green);
    }
    :focus ~ label {
      top: -6px;
      left: 7px;
      padding: 0 3px;
      font-size: .8em;
      font-weight: 600;
      color: ${({ err }) => err ? 'var(--red)' : 'var(--green)'};
      background: var(--white);
      transition: var(--transition);
      z-index: 20;
    }
  }
  label {
    position: absolute;
    margin-bottom: 0;
    top: 12px;
    left: 10px;
    font-size: .9em;
    color: var(--darkWhite);
    letter-spacing: var(--spacing);
    text-transform: uppercase;
    transition: var(--transition);
  }
  .shrink {
    top: -6px;
    left: 7px;
    padding: 0 3px;
    font-weight: 600;
    letter-spacing: var(--spacing);
    font-size: .8em;
    background: var(--white);
    color: ${({ err }) => err ? 'var(--red)' : 'var(--green)'};
    transition: var(--transition);
    z-index: 20;
  }
  input[type='password'] {
    letter-spacing: .3em;
  }
`

export default StyledInput;