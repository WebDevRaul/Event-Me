import styled from 'styled-components';

const StyledCircle = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100px;
  height: 100px;
  top: -50px;
  right: calc((410px / 2) - 50px);
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: var(--Shadow);
    border-radius: 50px;
    .inner-circle {
      width: 98%;
      height: 98%;
      background: var(--mainWhite);
      border-radius: 50px;
    }
  }
  .bottom {
    background: var(--mainWhite);
    height: 50px;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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

export default StyledCircle;