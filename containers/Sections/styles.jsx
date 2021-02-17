import styled from 'styled-components';
import { BREAKPOINTS } from '../../constants/screen';

export const SectionsBodyContainer = styled.main`
  width: 100vw;
`;

export const SectionsBody = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

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
