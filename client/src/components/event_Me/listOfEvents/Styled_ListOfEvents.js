import styled from 'styled-components';

const StyledListOfEvents = styled.section`
  .list-of-events {
    padding: 20px;
    .event {
      margin: 20px 0;
      background-color: var(--mainWhite);
      border: 1px solid var(--Shadow);
      border-radius: var(--BorderRadius);
      .header, .body, .members, .footer {
        display: flex;
        padding: 14px;
        border-bottom: 1px solid var(--Shadow);
      }
      .header {
        .info {
          padding: 14px;
        }
      }
      .body {
        div {
          margin: 0 14px;
        }
      }
      .members {
        min-height: 50px;
        background: var(--Grey);
      }
      .footer {
        justify-content: space-between;
        p {
          margin-right: 20px;
        }
        div {
          margin-top: auto;
        }
      }
    }
  }
`

export default StyledListOfEvents;