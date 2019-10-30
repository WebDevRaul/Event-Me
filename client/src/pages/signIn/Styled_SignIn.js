import styled from 'styled-components';

const StyledSignIn = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  min-height: calc(100vh - 86px);
  width: 410px;
  .sign-in {
    position: relative;
    padding: 40px 20px 30px;
    border: 1px solid var(--Shadow);
    border-radius: var(--BorderRadius);
    background: var(--mainWhite);
    .button-one {
      display: flex;
      justify-content: center;
      width: 80%;
      text-transform: uppercase;
    }
  }
`

export default StyledSignIn;