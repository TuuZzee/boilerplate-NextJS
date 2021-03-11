import styled from 'styled-components';

import { TitleH3 } from 'src/styles/styledComponents/textStyled';

export const LandingTitle = styled(TitleH3)`
  color: ${({ theme }) => theme.colors.text.title};
`;

export const LandingWrapper = styled.div`
  position: relative;
  text-align: center;
`;
