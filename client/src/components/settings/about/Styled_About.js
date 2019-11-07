import styled from 'styled-components';

const StyledAbout = styled.section`
  .about {
    margin: 0 20px;
    padding: 20px;
    border: 1px solid var(--Shadow);
    border-radius: var(--BorderRadius);
    background: var(--mainWhite);
    h4 {
      padding:0 0 10px 20px;
      margin-bottom: 10px;
      border-bottom: 1px solid var(--Shadow);
    }
    form {
      p {
        margin: 0px;
        font-weight: 500;
        font-size: 1.2em;
        &:nth-child(1) {
          margin-bottom: 10px;
        }
      }
      .form {
        margin-left: 20px;
        max-width: 330px;
        div {
          &:nth-child(2) {
            margin: 0 0 4px 0;
          }
        }
        .status {
          width: auto;
        }
      }
      .form ~ div{
        padding-top: 20px;
        border-top: 1px solid var(--Shadow);
      }
    }
  }
`
export default StyledAbout;