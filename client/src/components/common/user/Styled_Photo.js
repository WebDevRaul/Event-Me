import styled from 'styled-components';

const StyledPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: ${({ isBgk }) => isBgk ? 'transparent' : 'var(--Scolor)'};
  i {
    color: ${({ isClr }) => isClr ? 'var(--Pcolor)' : 'inherit'};
    font-size: 1.3em;
    &:hover {
      cursor: pointer;
    }
  }
`

export default StyledPhoto;