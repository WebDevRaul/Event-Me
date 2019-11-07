import styled from 'styled-components';

const StyledRadio = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
  .gender, .status {
    display: flex;
    align-items: center;
    position: relative;
    padding: 10px;
    width: 100%;
    border: 1px solid;
    border-color: ${({ err }) => err ? 'var(--Error)' : 'transparent'};
    border-radius: var(--BorderRadius);
    span {
      position: absolute;
      top: -7px;
      left: 12px;
      padding: 2px 10px;
      margin-bottom: 8px;
      font-size: .7em;
      font-weight: 600;
      background: var(--mainWhite);
      border-radius: var(--BorderRadius);
      letter-spacing: var(--Spacing);
      text-transform: uppercase;
      color: var(--Error);
    }
    input {
    margin: 0 10px;
  }
  }
  label {
    margin: 0px;
    font-size: .9;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: var(--Spacing);
  }
`

export default StyledRadio;