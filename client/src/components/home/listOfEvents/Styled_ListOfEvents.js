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
        align-items: center;
        .circle {
          width: 80px;
          height: 80px;
        }
        .info {
          padding: 14px;
        }
      }
      .body {
        min-height: 50px;
        p {
            margin: 0;
            i {
              margin-right: 5px;
            }
          }
        span {
          margin: 0 10px;
        }
      }
      .members {
        min-height: 50px;
        padding: 7.5px 14px;
        background: var(--Grey);
        div {
          margin: 0 5px;
        }
        i {
          font-size: 2em;
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