export const widthsPx = {
  desktopMax1440: 1440,
  desktopLandscape1172: 1172,
  desktopPortrait850: 850,
  tabletLandscape768: 768,
  tabletPortrait560: 560,
  mobileBig480: 480,
  mobileMedium414: 414,
  mobileSmall380: 380,
};

export const colors = {
  blackH222: '#222',
  greenH04e77f: '#04e77f',
  redHe01e3c: '#e01e3c',
  whiteHfff: '#fff',
} as const;

type O = typeof colors;
type K = keyof O;
export type ColorsType = O[K];

export const dark = 'dark';
export const light = 'light';
export const supportedUIthemes = [dark, light];
