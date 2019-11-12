import styled from 'styled-components';

const StyledSelect = styled.div`
  .select {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    border: 1px solid var(--Shadow);
    border-radius: var(--BorderRadius);
    background-color: var(--Shadow);
    .photo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 200px;
       i {
         font-size: 10em;
         color: var(--Pcolor);
       }
    }
    .wrapper-box {
        display: flex;
        flex-direction: row;
      i {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 5px 0;
        color: var(--Pcolor);
        background-color: var(--Error);
        &:hover {
          cursor: pointer;
        }
        &:nth-child(1) {
          background-color: var(--Green);
        }
      }
    }
  }
`

export default StyledSelect;