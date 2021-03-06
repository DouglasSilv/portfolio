import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { BREAKPOINTS } from '../../constants/screen';

export const HeaderContainer = styled.header`
  position: fixed;
  height: 50px;
  width: 100vw;
  background-color: ${COLORS.secondaryBackground};
  border-bottom: 5px solid ${COLORS.secondaryFont};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderItem = styled.a`
  font-size: 20px;
  padding: 2px 20px;
  text-decoration: none;
  color: ${COLORS.font};
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    font-size: 15px;
  }

  :not(:last-child) {
    border-right: 1px solid ${COLORS.gray};
  }
`;
