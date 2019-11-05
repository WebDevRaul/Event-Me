import styled from 'styled-components';

const StyledUser = styled.div`
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    border-radius: 50px;
    background: ${({ isBgk }) => isBgk ? 'var(--Scolor)' : 'var(--Pcolor)'};
    .inner-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 88%;
      height: 88%;
      background: var(--mainWhite);
      border-radius: 50px;
    }
  }
`

export default StyledUser;