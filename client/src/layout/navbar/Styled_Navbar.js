import styled from 'styled-components';
import { bootstrap } from '../../utils/devices';

const StyledNavbar = styled.div`
  .navbar {
    background: linear-gradient(135deg, #182a73 0%, #218aae 45%, #20a7ac 90%);
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
      padding-right: 5%;
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        display: flex;
        align-items: center;
        margin: 0 10px;
        a, span {
          color: var(--mainWhite);
          font-weight: 500;
          letter-spacing: var(--Spacing);
          &:hover {
            cursor: pointer;
            color: var(--Pcolor);
          }
        }
      }
      .events, .pages {
        &::after, ::before {
          position: absolute;
          content: "";
          height: 100%;
          width: 1px;
          background: var(--Shadow);
        }
        &::before {
          top: 0;
          right: 0;
        }
        &::after {
          top: 0;
          left: 0;
        }
      }
      .events {
        display: flex;
        position: relative;
        padding:0 5px;
      }
      .pages {
        display: flex;
        position: relative;
        &::before {
          right: 1%;
        }
        .button-one {
          width: 125px;
        }
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
        padding-right: 0px;
        &::before {
          background: black;
        } 
        .events, .pages {
          display: flex;
          flex-direction: column;
          align-items: center;
          &::before, ::after {
            display: none;
          }
          .button-one {
            width: 158px;
          }
          li {
            height: 50px;
          }
        }
      }
      .show-nav {
        /* 50px for each link */
        height: 200px;
      }
    }
  }
}
`

export default StyledNavbar;