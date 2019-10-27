import styled from 'styled-components';

const StyledEventInfo = styled.section`
  .event-info {
    padding: 50px 20px;
    .header {
      margin: 20px;
      border: 1px solid var(--Shadow);
      border-radius: var(--BorderRadius);
      .top {
        display: flex;
        flex-direction: column;
        height: 300px;
        background: grey;
        border-top-right-radius: var(--BorderRadius);
        border-top-left-radius: var(--BorderRadius);
        div {
          margin: auto 0 20px 20px;
        }
      }
    }
    .buttom {
      display: flex;
      justify-content: flex-start;
      background: var(--mainWhite);
      border-bottom-right-radius: var(--BorderRadius);
      border-bottom-left-radius: var(--BorderRadius);
      .button-one {
        margin: 20px;
      }
    }
  }
`
export default StyledEventInfo;