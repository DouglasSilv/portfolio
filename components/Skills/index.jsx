import { useContext } from 'react';
import { Context } from '../../pages';
import { Section } from '../Section';
import Title from '../Title';
import { SkillsSectionBody, StyledSkillRating } from './styles';

const Skills = () => {
  const { skills } = useContext(Context);

  return (
    <Section id="skills">
      <Title text="Skills" />
      <SkillsSectionBody>
        {skills.map((skill, index) => (
          <StyledSkillRating key={index} name={skill.name} stars={skill.stars} />
        ))}
      </SkillsSectionBody>
    </Section>
  );
};

export default Skills;
