import styled from 'styled-components';

const StyledDateInput = styled.div`
  position: relative;
  .react-datepicker-wrapper {
    width: 100%;
    input {
      width: 100%;
      padding: 10px;
      border: 1px solid;
      border-color: ${({ err }) => !err ? 'var(--Shadow)' : 'var(--Error)'};
      border-radius: var(--BorderRadius);
    }
  }
`

export default StyledDateInput;