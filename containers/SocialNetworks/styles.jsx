import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const SocialNetworksContainer = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 0px 5px 5px 0px;
  overflow: hidden;
`;

export const SocialNetworkItem = styled.div`
  background-color: ${COLORS.secondaryBackground};
  padding: 10px;
  cursor: pointer;

  svg {
    transition: transform 0.3s;
    :hover {
      transform: scale(1.2);
    }
  }
`;
