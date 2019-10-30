import styled from 'styled-components';

const StyledUser = styled.div`
  .logo {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50px;
    background: ${({ isBgk }) => isBgk ? 'var(--Scolor)' : 'var(--Pcolor)'};
    .inner-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      height: 90%;
      background: var(--mainWhite);
      border-radius: 50px;
    }
  }
`

export default StyledUser;