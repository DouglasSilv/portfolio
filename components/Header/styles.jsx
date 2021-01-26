import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const HeaderContainer = styled.header`
  position: fixed;
  height: 50px;
  width: 100vw;
  background-color: ${COLORS.secondaryBackground};
  color: ${COLORS.font};
  border-bottom: 5px solid ${COLORS.secondaryFont};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderItem = styled.div`
  font-size: 20px;
  padding: 2px 20px;
  cursor: pointer;

  :not(:last-child) {
    border-right: 1px solid ${COLORS.gray};
  }
`;
