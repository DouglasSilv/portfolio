import { GlobalStyle } from '../config/GlobalStyle';
import Header from '../components/Header';
import Home from '../components/Home';
import SocialNetworks from '../components/SocialNetworks';
import Sections from '../components/Sections';
import Contact from '../components/Contact';

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SocialNetworks />
      <Home />
      <Sections />
      <Contact />
    </>
  );
};

export default Main;
