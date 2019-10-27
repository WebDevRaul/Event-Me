import styled from 'styled-components';
import { bootstrap } from '../../utils/devices';

const StyledNavbar = styled.div`
  .navbar {
    background: linear-gradient(135deg, #ff2b00 0%, #ff8106 45%, #fec34d 90%);
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
            color: var(--Pcolor);
          }
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
        .button-one {
          width: 125px;
        }
        .user {
          min-width: 175px;
          position: relative;
          display: flex;
          color: var(--mainWhite);
          font-weight: 500;
          letter-spacing: var(--Spacing);
          p {
            margin: 0px;
            &:hover {
              cursor: pointer;
            }
          }
          .wrapper {
            min-width: 100%;
            height: 100%;
            position: absolute;
            top: 100%;
            right: 20px;
            z-index: 50;
            display: ${({ show }) => show ? 'block' : 'none'};
            .list {
              display: flex;
              flex-direction: column;
              min-width: 100%;
              margin-top: 10px;
              background-color: var(--mainWhite);
              border: 1px solid var(--Shadow);
              border-radius: var(--BorderRadius);
              padding-left: 1px;
              a {
                margin: 5px 0;
                padding: 14px;
                color: var(--mainBlack);
                &:hover {
                  background: var(--Shadow);
                  color: var(--Scolor);
                }
              }
            }
            .tip {
              content: '';
              width: 10px;
              height: 10px;
              background: var(--mainWhite);
              position: absolute;
              border-left: 1px solid var(--Shadow);
              border-top: 1px solid var(--Shadow);
              top: 5px;
              left: 40px;
              transform: rotate(45deg);
              z-index: 20;
            }
          }
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