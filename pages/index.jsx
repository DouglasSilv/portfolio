import { createContext } from 'react';
import Header from '../containers/Header';
import Home from '../containers/Home';
import SocialNetworks from '../containers/SocialNetworks';
import Sections from '../containers/Sections';
import Contact from '../containers/Contact';
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
