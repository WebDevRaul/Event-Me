import styled from 'styled-components';

const StyledCreateEvent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  min-height: calc(100vh - 86px);
  width: 410px;
  .create-event {
    position: relative;
    padding: 40px 20px 30px;
    margin-top: 60px;
    border: 1px solid var(--Shadow);
    border-radius: var(--BorderRadius);
    background: var(--mainWhite);
    form {
      .submit {
        margin: 0 5%;
        display: flex;
        justify-content: space-between;
        .button-one {
          width: 116px;
        }
      }
    }
  }
`
export default StyledCreateEvent;