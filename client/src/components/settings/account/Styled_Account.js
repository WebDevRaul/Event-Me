import styled from 'styled-components';
import photo from '../../../assets/images/event.jpg';

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
      margin-bottom: 40px;
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
          color: var(--Pcolor);
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
      h4 {
        margin-bottom: 14px;
      }
      .body {
        font-size: 1.2em;
        p > span {
          color: var(--Pcolor);
          font-size: 1.1em;
          font-weight: 500;
          letter-spacing: var(--Spacing);
        }
      }
      .side-body {
        display: flex;
        justify-content: flex-start;
        li {
          color: var(--Pcolor);
          font-size: 1.1em;
          font-weight: 500;
          letter-spacing: var(--Spacing);
        }
      }
    }
    .events {
      .event {
        width: 200px;
        height: 200px;
        border: 1px solid var(--Shadow);
        border-radius: var(--BorderRadius);
        .background {
          position: relative;
          height: 100px;
          .cool-image {
            height: 100%;
            background-image: url(${photo});
            -webkit-filter: blur(1px);
            -moz-filter: blur(1px);
            -o-filter: blur(1px);
            -ms-filter: blur(1px);
            filter: blur(1px);
          }
          i {
            position: absolute;
            top: 50%;
            left:50%;
            transform: translate(-50%, -50%);          
            color: var(--Pcolor);
            font-size: 2em;
            font-weight: 500;
            letter-spacing: var(--Spacing);
            text-transform: uppercase;
          }
        }
        .body {
          height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 10px;
          h4 {
            margin-bottom: 5px;
          }
        }
      }
    }
  }
`

export default StyledAccount;