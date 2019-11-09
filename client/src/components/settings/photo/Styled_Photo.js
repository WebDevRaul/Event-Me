import styled from 'styled-components';

const StyledPhoto = styled.section`
  margin: 0 20px;
  padding: 20px;
  border: 1px solid var(--Shadow);
  border-radius: var(--BorderRadius);
  background: var(--mainWhite);
  h4 {
    &:nth-child(1) {
      padding:0 0 10px 20px;
      margin-bottom: 10px;
      border-bottom: 1px solid var(--Shadow);
    }
  }
  .step-one {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4 {
      color: var(--Pcolor);
      padding: 0px;
      &:nth-child(1) {
        font-size: 1.4em;
      }
      &:nth-last-child(1) {
        font-size: 1em;
        padding-top: 10px;
      }
    }
    .dropzone {
      border: 3px dashed var(--Shadow);
      border-radius: var(--BorderRadius);
      padding: 20px;
      text-align: center;
    }
    .is-active {
      border: 3px dashed var(--Green);
    }
  }
  .step-tree {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4 {
      color: var(--Pcolor);
      padding: 0px;
      &:nth-child(1) {
        font-size: 1.4em;
      }
    }
    img {
      min-height: 100px;
      max-height: 100px;
      border-radius: var(--BorderRadius);
    }
  }
`

export default StyledPhoto;