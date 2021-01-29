import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const ContactContainer = styled.div`
  width: 100vw;
  background-color: ${COLORS.background};
`;

export const ContactBody = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  color: ${COLORS.font};
`;

export const ContactForm = styled.form`
  margin-top: 50px;
  width: 800px;
`;

export const ContactFeedback = styled.div`
  font-size: 15px;
  color: ${({ isError }) => (isError ? COLORS.error : COLORS.checked)};
  padding-bottom: 15px;
`;
