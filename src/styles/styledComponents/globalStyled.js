import { createGlobalStyle } from 'styled-components';

import { colors } from '../theme';

export const GlobalStyles = createGlobalStyle`
  root { font-size: 16px; }

  * { font-family: 'Spoqa Han Sans', Sans-serif; }

  @media (max-width: 801px) {
    :root { font-size: 15px; }
  }
  @media (max-width: 480px) {
    :root { font-size: 14px; }
  }

  html { scroll-behavior: smooth; }

  body {
    background-color: ${({ theme }) => theme.colors.bckground.body};
    font-style: normal;
    font-weight: normal;
  }

  .text-align-right { text-align: right; }
  .text-align-center { text-align: center; }

  /*
  * react-circular-progressbar styles
  */
  .CircularProgressbar {
    /*
    * This fixes an issue where the CircularProgressbar svg has
    * 0 width inside a "display: flex" container, and thus not visible.
    */
    width: 100%;

    /*
    * This fixes a centering issue with CircularProgressbarWithChildren:
    * https://github.com/kevinsqi/react-circular-progressbar/issues/94
    */
    vertical-align: middle;
  }

  .CircularProgressbar .CircularProgressbar-path {
    stroke: ${colors.redHe01e3c};
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease 0s;
  }

  .CircularProgressbar .CircularProgressbar-trail {
    stroke: #d6d6d6;

    /* Used when trail is not full diameter, i.e. when props.circleRatio is set */
    stroke-linecap: round;
  }

  .CircularProgressbar .CircularProgressbar-text {
    fill: ${colors.redHe01e3c};
    font-size: 20px;
    dominant-baseline: middle;
    text-anchor: middle;
  }

  .CircularProgressbar .CircularProgressbar-background { fill: #d6d6d6; }

  /*
  * Sample background styles. Use these with e.g.:
  *
  *   <CircularProgressbar
  *     className="CircularProgressbar-inverted"
  *     background
  *     percentage={50}
  *   />
  */
  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-background {
    fill: ${colors.redHe01e3c};
  }

  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {
    fill: ${colors.whiteHfff};
  }

  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {
    stroke: ${colors.whiteHfff};
  }

  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail { stroke: transparent; }

  .prevArrowVertical {
    position: absolute;
    width: 20px;
    left: -3rem;

    @media screen and (max-width: 480px) {
      display: none;
    }
  }

  .prevArrowHorizontal {
    position: absolute;
    left: -5rem;
    width: 10%;

    @media screen and (min-width: 850px) and (max-width: 1200px) {
      display: none;
    }
  }

  .nextArrowHorizontal {
    position: absolute;
    right: -5rem;
    width: 10%;

    @media screen and (min-width: 850px) and (max-width: 1200px) {
      right: 0.5rem;
      width: 20px;
    }
    @media screen and (max-width: 849px) {
      width: 20px;
    }
  }

  .nextArrowVertical {
    position: absolute;
    width: 20px;
    right: -3rem;

    @media screen and (max-width: 849px) {
      width: 20px;
    }
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
