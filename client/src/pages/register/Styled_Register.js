import styled from 'styled-components';

const StyledRegister = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  min-height: calc(100vh - 86px);
  width: 410px;
  .register {
    position: relative;
    padding: 40px 20px 30px;
    margin-top: 60px;
    border: 1px solid var(--Shadow);
    border-radius: var(--BorderRadius);
    background: var(--mainWhite);
  }
`

export default StyledRegister;