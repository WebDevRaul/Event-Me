import styled from 'styled-components';

const StyledMultiSelect = styled.div`
  .select {
    position: relative;
    /* .indicatorContainer {
      display: none!important;
    } */
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
        top: -7px;
        background: var(--mainWhite);
        border-radius: var(--BorderRadius);
        padding: 2px 10px;
        font-weight: 600;
        letter-spacing: var(--Spacing);
        left: 12px;
        font-size: .7em;
        color: ${({ err }) => err ? 'var(--Error)' : 'var(--Green)'}
      }
      &:hover {
        cursor: unset;
      }
    }
  }
`

export default StyledMultiSelect;