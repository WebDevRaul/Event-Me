import styled from 'styled-components';

const StyledButtonOne = styled.div`
  padding: 11px 21px;
  letter-spacing: var(--Spacing);
  border-radius: var(--BorderRadius);
  box-shadow: inset 0 0 0 2px var(--mainWhite);
  margin: 0 10px;
  background: ${({ isClass }) => isClass ? 'var(--Pcolor)' : 'transparent'};
  p {
    margin-bottom: 0px;
    color: var(--mainWhite);
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 0 2px var(--Scolor);
    & p {
      color: var(--Scolor);
    }
  }
`

export default StyledButtonOne;