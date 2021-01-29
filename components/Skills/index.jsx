import { SKILLS } from '../../constants/skills';
import { Section } from '../Section';
import Title from '../Title';
import { SkillsSectionBody, StyledSkillRating } from './styles';

const Skills = () => {
  return (
    <Section id="skills">
      <Title text="Skills" />
      <SkillsSectionBody>
        {SKILLS.map((skill, index) => (
          <StyledSkillRating key={index} name={skill.name} stars={skill.stars} />
        ))}
      </SkillsSectionBody>
    </Section>
  );
};

export default Skills;
