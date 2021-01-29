import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const StyledTitle = styled.h1`
  font-weight: 600;
  color: ${({ color }) => color || COLORS.bodyFont};
  font-size: 36px;
  padding: ${({ padding }) => padding};
`;
