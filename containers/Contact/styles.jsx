import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { BREAKPOINTS } from '../../constants/screen';

export const ContactContainer = styled.div`
  width: 100vw;
  background-color: ${COLORS.background};
`;

export const ContactBody = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  color: ${COLORS.font};

  @media (max-width: ${BREAKPOINTS.xl}px) {
    max-width: 900px;
  }

  @media (max-width: ${BREAKPOINTS.lg}px) {
    max-width: 720px;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    max-width: 570px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    max-width: 300px;
  }
`;

export const ContactForm = styled.form`
  margin-top: 50px;
  width: 100%;
`;

export const ContactFeedback = styled.div`
  font-size: 15px;
  color: ${({ isError }) => (isError ? COLORS.error : COLORS.checked)};
  padding-bottom: 15px;
`;
