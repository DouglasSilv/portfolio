import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const StyledButton = styled.button`
  margin: ${({ margin }) => margin};
  color: ${COLORS.font};
  background-color: ${COLORS.secondaryFont};
  height: 35px;
  border: 2px solid ${COLORS.white};
  border-radius: 18px;
  width: 100px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: transform 0.3s;

  :hover {
    transform: scale(1.05);
  }

  :focus {
    outline: none;
  }
`;
