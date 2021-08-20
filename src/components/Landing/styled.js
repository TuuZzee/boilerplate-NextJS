import styled from 'styled-components';

import { TitleH3 } from 'src/styles/styledComponents/textStyled';

export const LandingTitle = styled(TitleH3)`
  color: ${({ theme }) => theme.colors.text.title};
  text-align: center;
`;

export const LandingWrapper = styled.div`
  position: relative;
`;
