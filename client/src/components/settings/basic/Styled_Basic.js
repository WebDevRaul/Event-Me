import styled from 'styled-components';

const StyledBasic = styled.section`
  .basic {
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
      .form {
        max-width: 330px;
        margin-left: 20px;
      }
      .form ~ div{
        padding-top: 20px;
        border-top: 1px solid var(--Shadow);
      }
    }
  }
`

export default StyledBasic;