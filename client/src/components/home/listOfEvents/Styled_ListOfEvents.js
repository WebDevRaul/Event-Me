import styled from 'styled-components';

const StyledListOfEvents = styled.div`
  .list-of-events {
    padding: 20px;
    .event {
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