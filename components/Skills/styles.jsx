import styled from 'styled-components';
import SkillRating from '../SkillRating';

export const SkillsSection = styled.section`
  padding: 50px 0;
`;

export const SkillsSectionBody = styled.div`
  padding-top: 25px;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledSkillRating = styled(SkillRating)`
  flex-basis: 25%;
  margin-bottom: 20px;
`;
