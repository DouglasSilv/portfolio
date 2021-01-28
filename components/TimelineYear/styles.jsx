import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const TimeLineYearContainer = styled.div`
  :not(:first-of-type) {
    margin-top: 35px;
  }
`;

export const TimelineYearIcon = styled.div`
  padding-right: 10px;
`;

export const TimelineYearBody = styled.div``;

export const TimelineYearTitle = styled.div`
  font-size: 23px;
  font-weight: 700;
  color: ${COLORS.bodyFont};
`;

export const TimelineYearDescription = styled.div`
  margin-top: 5px;
  font-size: 16px;
  line-height: 25px;
`;

export const TimelineYearEvent = styled.div`
  display: flex;
  margin-top: 25px;
`;

export const TimelineYearEventTitle = styled.div`
  font-size: 19px;
  font-weight: 500;
`;
