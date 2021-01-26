import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HomeTitle = styled.div`
  font-size: 40px;
  line-height: 53px;
  color: ${COLORS.font};
  height: fit-content;
  text-align: center;
`;

export const HomeTitleName = styled.div`
  font-weight: 700;
  color: ${COLORS.secondaryFont};
  display: inline;
`;

export const HomeDownIcon = styled.div`
  margin-top: 30px;
  transition: transform 0.3s;
  cursor: pointer;

  :hover {
    transform: scale(1.3);
  }
`;
