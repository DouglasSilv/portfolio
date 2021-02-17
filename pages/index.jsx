import { createContext } from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import SocialNetworks from '../components/SocialNetworks';
import Sections from '../components/Sections';
import Contact from '../components/Contact';
import { SKILLS_QUERY, TIMELINE_QUERY } from '../graphql/queries';
import { executeQueries } from '../config/apolloClient';

export const Context = createContext({});

const Main = (props) => {
  return (
    <Context.Provider value={props}>
      <Header />
      <SocialNetworks />
      <Home />
      <Sections />
      <Contact />
    </Context.Provider>
  );
};

export const getStaticProps = async () => {
  const { timeline, skills } = await executeQueries([TIMELINE_QUERY, SKILLS_QUERY]);

  return {
    props: {
      timeline,
      skills,
    },
    revalidate: 60,
  };
};

export default Main;
