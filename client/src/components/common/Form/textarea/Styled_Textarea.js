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
    &:focus ~ .label {
      ${shrink}
    }
  }
  .label {
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
    &:hover {
      cursor: unset;
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
  .validate ~ .label {
    color: var(--Error);
  }
`

export default StyledTextarea;