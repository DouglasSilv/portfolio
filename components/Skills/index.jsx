import { SKILLS } from '../../constants/skills';
import Title from '../Title';
import { SkillsSection, SkillsSectionBody, StyledSkillRating } from './styles';

const Skills = () => {
  return (
    <SkillsSection>
      <Title text="Skills" />
      <SkillsSectionBody>
        {SKILLS.map((skill, index) => (
          <StyledSkillRating key={index} name={skill.name} stars={skill.stars} />
        ))}
      </SkillsSectionBody>
    </SkillsSection>
  );
};

export default Skills;
