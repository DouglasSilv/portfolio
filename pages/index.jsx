import { GlobalStyle } from '../config/GlobalStyle';
import Head from 'next/head';
import Header from '../components/Header';
import Home from '../components/Home';
import SocialNetworks from '../components/SocialNetworks';
import Sections from '../components/Sections';

const Main = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>
      <Head>
        <title>Douglas Silva - Software Developer</title>
      </Head>
      <GlobalStyle />
      <Header />
      <SocialNetworks />
      <Home />
      <Sections />
    </>
  );
};

export default Main;
