import styled from 'styled-components';

const StyledSettings = styled.section`
  .settings {
    padding: 50px 20px;
    .navigation {
      .list {
        width: 300px;
        background: var(--mainWhite);
        &:nth-child(1) {
          margin-bottom: 28px;
        }
        .path {
          padding: 14px;
          margin-bottom: -1px;
          border: 1px solid var(--Shadow);
          &:nth-child(1) {
            background: var(--Scolor);
          }
        }
        .hover {
          &:hover {
            cursor: pointer;
          }
        }
        .active {
          background: var(--Hover);
        }
      }
    }
  }
`

export default StyledSettings;