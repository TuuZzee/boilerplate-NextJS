import 'styled-components';

import { ColorsType } from 'src/styles/theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blackH222: '#222';
      greenH04e77f: '#04e77f';
      redHe01e3c: '#e01e3c';
      whiteHfff: '#fff';
    };
  }
}
