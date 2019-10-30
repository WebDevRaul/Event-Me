import styled from 'styled-components';

const StyledSignIn = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: calc(100vh - 86px);
  width: 410px;
  .sign-in {
    position: relative;
    padding: 30px;
    border: 1px solid var(--Shadow);
    border-radius: var(--BorderRadius);
    background: var(--mainWhite);
  }
`

export default StyledSignIn;