import styled from 'styled-components';
import { bootstrap } from '../../utils/devices';

const StyledNavbar = styled.div`
  .navbar {
    background: linear-gradient(135deg,#1d379e,#0a56c9 9%,#205dac 89%);
    .nav-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .nav-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        button {
          display: none;
        }
      }
    .nav-links {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .events {
        display: flex;
      }
      .pages {
        display: flex;
      }
    }
  }
}

@media ${bootstrap.lg}{
  .navbar {
    .nav-wrapper {
      flex-direction: column;
      .nav-header {
        width: 100%;
        button {
          display: block;
        }
      }
      .nav-links {
        width: auto;
        height: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      .show-nav {
        /* 44px for each link */
        height: 132px;
      }
    }
  }
}
`

export default StyledNavbar;