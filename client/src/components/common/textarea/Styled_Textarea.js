import styled from 'styled-components';

const StyledTextarea = styled.div`
  position: relative;
  margin: 25px 0;
  textarea {
    width: 100%;
    padding: 10px 10px 25px;
    border: 1px solid var(--Shadow);
    border-radius: var(--BorderRadius);
    overflow-y: hidden;
    resize: none;
  }
  .badge {
    position: absolute;
    right: 0;
    bottom: 5px;
    padding: 5px 5px 4px 5px;
    margin: 5px;
    border: 1px solid var(--Green);
    border-radius: var(--BorderRadius);
  }
  .over {
    border-color: var(--Error);
  }
`

export default StyledTextarea;