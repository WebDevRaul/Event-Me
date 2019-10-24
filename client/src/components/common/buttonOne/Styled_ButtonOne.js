import styled from 'styled-components';

const StyledButtonOne = styled.div`
  .button-one {
    padding: 11px 21px;
    letter-spacing: var(--Spacing);
    border-radius: var(--BorderRadius);
    box-shadow: inset 0 0 0 2px var(--mainWhite);
    text-align: center;
    background: transparent;
    p {
      margin: 0px !important;
      color: var(--mainWhite);
    }
    &:hover {
      cursor: pointer;
      box-shadow: inset 0 0 0 2px var(--Pcolor);
      & p {
        color: var(--Pcolor);
      }
    }
  }
  .green {
    background: var(--Green);
  }
  .blue {
    background: var(--Blue);
    box-shadow: inset 0 0 0 2px var(--Blue);
  }
  .inverted {
    box-shadow: inset 0 0 0 2px var(--mainBlack);
    p {
      color: var(--mainBlack);
    }
  }
`

export default StyledButtonOne;