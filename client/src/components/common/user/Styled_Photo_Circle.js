import styled from 'styled-components';

const StyledPhotoCircle = styled.div`
  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: var(--Scolor);
    border-radius: 50px;
    .inner-circle {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1px 1px 0 0;
      width: 90%;
      height: 90%;
      background: var(--mainWhite);
      border-radius: 50px;
      div {
        width: 80%;
        height: 80%;
        i {
          color: var(--mainWhite);
          font-size: 2.5em;
        }
      }
    }
  }
`

export default StyledPhotoCircle;