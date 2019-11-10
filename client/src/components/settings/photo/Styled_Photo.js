import styled from 'styled-components';

const height = '200px';
const width = '200px';
const innerHeight = '180px';
const innerWidth = '180px';

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
  .step-one, .step-two, .step-tree {
    h4 {
      text-align: center;
      color: var(--Pcolor);
      padding: 0px;
      border-bottom: none;
      &:nth-child(1) {
        font-size: 1.4em;
      }
      &:nth-last-child(1) {
        font-size: 1em;
        padding-top: 10px;
      }
    }
    .box {
      width: ${width};
      height: ${height};
      margin: auto;
      padding: 10px;
      border: 1px solid var(--Shadow);
      border-radius: var(--BorderRadius);
      position: relative;
    }
  }
  .step-one {
    .box {
      border: none;
      display: flex;
      align-items: center;
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
  }
  .step-two {
    .box > div > div {
    width: ${innerWidth}!important;
    }
  }
  .step-tree {
    .img-preview {
      height: ${innerHeight};
      width: ${innerWidth};
      border-radius: var(--BorderRadius);
      overflow: hidden;
    }
  }
`

export default StyledPhoto;