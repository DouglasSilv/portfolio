import { Section } from '../Section';
import Title from '../Title';
import { AboutDescription, Link } from './styles';

const About = () => {
  return (
    <Section>
      <Title text="About" />
      <AboutDescription>
        I&apos;m a software developer for
        <Link href="https://www.dbccompany.com.br" target="_blank">
          {' DBC Company '}
        </Link>
        in Porto Alegre, Brazil. Currently graduating in Computer Science at the University of Vale
        do Rio dos Sinos, in São Leopoldo. One of my biggest hobbies is playing video games, and
        that probably influenced my choice in the area of software development. Below, you can check
        my skills and which technologies I am most familiar with.
      </AboutDescription>
    </Section>
  );
};

export default About;
