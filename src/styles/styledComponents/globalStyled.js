import { createGlobalStyle } from 'styled-components';

import { colors } from '../theme';

export const GlobalStyles = createGlobalStyle`
  * { font-family: 'Spoqa Han Sans', Sans-serif; }

  root { font-size: 16px; }

  @media (max-width: 801px) {
    :root { font-size: 15px; }
  }
  @media (max-width: 480px) {
    :root { font-size: 14px; }
  }

  html { scroll-behavior: smooth; }

  body {
    font-style: normal;
    font-weight: normal;
  }

  .text-align-center { text-align: center; }
  .text-align-left { text-align: left; }
  .text-align-right { text-align: right; }

  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: white;
    padding: 8px;
    z-index: 100;
  }

  .skip-link:focus {
    top: 0;
  }

  /*
  ** Scrollbars
  */
  ::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.colors.background.body};
    width: 16px;
  }

  /* background of the scrollbar except button or resizer */
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.background.body};
  }

  /* scrollbar itself */
  ::-webkit-scrollbar-thumb {
    background-color: ${colors.greyHbdbdbd};
    border-radius: 16px;
    border: 4px solid ${({ theme }) => theme.colors.background.body};
  }

  /* set button(top and bottom of the scrollbar) */
  ::-webkit-scrollbar-button {
    display: none;
  }

  /*
  ** React Redux Toastr
  */
  .redux-toastr .toastr.rrt-info { background-color: #313437; }
  .redux-toastr .toastr.rrt-error { background-color: ${colors.redHe01e3c}; }
  .redux-toastr .toastr.rrt-success { background-color: ${colors.greenH04e77f}; }

  /*
  ** Nprogress
  */
  #nprogress .bar { background: ${colors.redHe01e3c}; }

  #nprogress .peg {
    box-shadow: ${`0 0 10px ${colors.redHe01e3c}, 0 0 5px ${colors.redHe01e3c}`};
  }

  #nprogress .spinner-icon {
    border-top-color: ${colors.redHe01e3c};
    border-left-color: ${colors.redHe01e3c};
  }
`;

export const Unused = '';
