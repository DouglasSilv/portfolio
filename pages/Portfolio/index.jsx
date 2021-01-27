import { Fragment } from 'react';
import GrayLine from '../../components/GrayLine';
import Header from '../../components/Header';
import Home from '../../components/Home';
import SocialNetworks from '../../components/SocialNetworks';
import { SECTIONS } from '../../constants/sections';
import { PortfolioBody, PortfolioBodyContainer } from './styles';

const Portfolio = () => {
  const numberOfSections = SECTIONS.length;

  return (
    <>
      <Header />
      <SocialNetworks />
      <Home />
      <PortfolioBodyContainer>
        <PortfolioBody>
          {SECTIONS.map((Section, index) => {
            const isLastElement = index + 1 === numberOfSections;

            return (
              <Fragment key={index}>
                <Section />
                {!isLastElement && <GrayLine />}
              </Fragment>
            );
          })}
        </PortfolioBody>
      </PortfolioBodyContainer>
    </>
  );
};

export default Portfolio;
