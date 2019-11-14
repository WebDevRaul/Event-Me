import styled from 'styled-components';

const StyledAccount = styled.section`
  .account {
    margin: 0 20px;
    padding: 20px;
    border: 1px solid var(--Shadow);
    border-radius: var(--BorderRadius);
    background: var(--mainWhite);
    & > h4 {
      padding:0 0 10px 20px;
      margin-bottom: 10px;
      border-bottom: 1px solid var(--Shadow);
    }
    .header {
      display: flex;
      height: 120px;
      margin-bottom: 20px;
      .photo {
        display: flex;
        align-items: center;
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-left: 20px;
        h4 {
          margin-bottom: 5px;
        }
        p {
          font-weight: 500;
          margin-bottom: 0;
          span {
            margin-left: 10px;
          }
        }
      }
    }
    .info {
      
    }
  }
`

export default StyledAccount;