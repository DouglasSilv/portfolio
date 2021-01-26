import About from '../../components/About';
import Header from '../../components/Header';
import Home from '../../components/Home';
import SocialNetworks from '../../components/SocialNetworks';
import { PortfolioBody, PortfolioBodyContainer } from './styles';

const Portfolio = () => {
  return (
    <>
      <Header />
      <SocialNetworks />
      <Home />
      <PortfolioBodyContainer>
        <PortfolioBody>
          <About />
        </PortfolioBody>
      </PortfolioBodyContainer>
    </>
  );
};

export default Portfolio;
