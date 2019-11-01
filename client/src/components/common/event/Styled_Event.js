import styled from 'styled-components';

const StyledEvent = styled.section`
  padding: 50px 20px;
  .header, .info, .side-bar {
    margin: 20px;
    border: 1px solid var(--Shadow);
    border-radius: var(--BorderRadius);
  }
  .header {
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
  .info {
    background: var(--mainWhite);
    padding: 20px;
    display: flex;
    flex-direction: column;
    p, time {
      display: flex;
      align-items: center;
      min-height: 50px;
      margin-bottom: 0px;
    }
  }
  .side-bar {
    .top {
      padding: 20px 0;
      text-align: center;
      background: var(--blue);
      border-top-right-radius: var(--BorderRadius);
      border-top-left-radius: var(--BorderRadius);
      p {
        margin-bottom: 0;
      }
    }
    .bottom {
      padding: 15px;
      background: var(--mainWhite);
      border-bottom-right-radius: var(--BorderRadius);
      border-bottom-left-radius: var(--BorderRadius);
      div {
        padding: 15px;
        border-bottom: 1px solid var(--Shadow);
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
`

export default StyledEvent;