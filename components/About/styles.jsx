import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const AboutSection = styled.section`
  padding: 50px 0;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${COLORS.secondaryFont};
  font-weight: 600;
`;

export const AboutDescription = styled.div`
  margin-top: 25px;
  font-size: 18px;
  line-height: 25px;
`;
