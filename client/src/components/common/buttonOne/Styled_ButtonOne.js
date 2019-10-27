import styled from 'styled-components';

const StyledButtonOne = styled.div`
  .button-one {
    padding: 11px 21px;
    margin: auto;
    letter-spacing: var(--Spacing);
    border-radius: var(--BorderRadius);
    text-align: center;
    background: transparent;
    p {
      margin: 0px !important;
      color: var(--mainWhite);
    }
    &:hover {
      cursor: pointer;
      & p {
        color: var(--Pcolor);
      }
    }
  }
  .box {
    box-shadow: inset 0 0 0 2px var(--mainWhite);
    &:hover {
      box-shadow: inset 0 0 0 2px var(--Pcolor);
    }
  }
  .green {
    background: var(--Green);
  }
  .grey {
    background: var(--Grey);
  }
  .black {
    background: var(--mainBlack);
  }
  .blue {
    background: var(--Blue);
  }
`

export default StyledButtonOne;