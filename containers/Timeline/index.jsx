import { useContext } from 'react';
import { Section } from '../../components/Section';
import TimelineYear from '../../components/TimelineYear';
import Title from '../../components/Title';
import { Context } from '../../pages';

const Timeline = () => {
  const { timeline } = useContext(Context);

  return (
    <Section id="timeline">
      <Title text="Timeline" padding="0 0 25px 0" />
      {timeline.map((item, index) => (
        <TimelineYear key={index} year={item.year} events={item.events} />
      ))}
    </Section>
  );
};

export default Timeline;
