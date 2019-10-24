import styled from 'styled-components';

const StyledListOfEvents = styled.div`
  .list-of-events {
    padding: 20px;
    .event {
      min-height: 300px;
      background-color: var(--mainWhite);
      border: 1px solid var(--Shadow);
      border-radius: var(--BorderRadius);
      .header {
        padding: 14px;
        display: flex;
        h4 {
          padding-left: 14px;
        }
      }
    }
  }
`

export default StyledListOfEvents;