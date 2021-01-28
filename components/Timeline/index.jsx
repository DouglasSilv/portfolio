import { TIMELINE } from '../../constants/timeline';
import { Section } from '../Section';
import TimelineYear from '../TimelineYear';
import Title from '../Title';

const Timeline = () => {
  return (
    <Section>
      <Title text="Timeline" padding="0 0 25px 0" />
      {TIMELINE.reverse().map((item, index) => (
        <TimelineYear key={index} year={item.year} events={item.events} />
      ))}
    </Section>
  );
};

export default Timeline;
