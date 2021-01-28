import { arrayOf, number, oneOfType, shape, string } from 'prop-types';
import {
  TimeLineYearContainer,
  TimelineYearIcon,
  TimelineYearBody,
  TimelineYearTitle,
  TimelineYearDescription,
  TimelineYearEvent,
  TimelineYearEventTitle,
} from './styles';
import { BsCheckCircle } from 'react-icons/bs';
import { COLORS } from '../../constants/colors';

const TimelineYear = ({ year, events }) => {
  return (
    <TimeLineYearContainer>
      <TimelineYearTitle>{year}</TimelineYearTitle>
      {events.map((item, index) => (
        <TimelineYearEvent key={index}>
          <TimelineYearIcon>
            <BsCheckCircle size="20" color={COLORS.checked} />
          </TimelineYearIcon>
          <TimelineYearBody>
            <TimelineYearEventTitle>{item.title}</TimelineYearEventTitle>
            <TimelineYearDescription>{item.description}</TimelineYearDescription>
          </TimelineYearBody>
        </TimelineYearEvent>
      ))}
    </TimeLineYearContainer>
  );
};

TimelineYear.propTypes = {
  year: oneOfType([string, number]).isRequired,
  events: arrayOf(
    shape({
      title: string,
      description: string,
    }),
  ).isRequired,
};

export default TimelineYear;
