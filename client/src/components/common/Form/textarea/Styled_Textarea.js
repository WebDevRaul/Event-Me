import styled from 'styled-components';

const StyledTextarea = styled.div`
  position: relative;
  margin: 25px 0;
  textarea {
    width: 100%;
    padding: 10px;
    min-height: 40.87px;
    border: 1px solid var(--Shadow);
    border-radius: var(--BorderRadius);
    overflow-y: hidden;
    resize: none;
    transition: var(--Transition);
    &:focus ~ div > .label {
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
  .badge {
    position: absolute;
    right: 5px;
    top: -13px;
    padding: 5px 8px 4px 8px;
    margin: 5px;
    background: var(--mainWhite);
  }
  .over {
    color: var(--Error);
  }
  .validate {
    border-color: var(--Error);
  }
`

export default StyledTextarea;