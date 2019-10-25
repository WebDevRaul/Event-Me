import styled from 'styled-components';

const StyledButtonOne = styled.div`
  .button-one {
    max-width: 160px;
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
      background: var(--Pcolor);
      & p {
        color: var(--Scolor);
      }
    }
  }
  .box {
    box-shadow: inset 0 0 0 2px var(--mainWhite);
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
    &:hover {
      background: var(--Pcolor);
    }
  }
`

export default StyledButtonOne;