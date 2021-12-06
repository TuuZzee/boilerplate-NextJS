import styled from 'styled-components';
import { Message } from 'rsuite';

export const EnvBadgeBlock = styled.div`
  position: fixed;
  left: 10px;
  top: 90%;

  .rs-message .rs-message-container {
    font-size: 12px;
    padding: 0.5rem;
  }
`;

export const EnvBadgeMessage = styled(Message)`
  position: relative;
`;
