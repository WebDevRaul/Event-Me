import styled from 'styled-components';

const StyledButtonOne = styled.div`
  padding: 11px 21px;
  letter-spacing: var(--Spacing);
  border-radius: var(--BorderRadius);
  box-shadow: inset 0 0 0 2px var(--mainWhite);
  background: ${({ isClass }) => isClass ? 'var(--Success)' : 'transparent'};
  p {
    margin-bottom: 0px;
    color: var(--mainWhite);
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 0 2px var(--Pcolor);
    & p {
      color: var(--Pcolor);
    }
  }
`

export default StyledButtonOne;