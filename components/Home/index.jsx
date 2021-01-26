import { getWelcomeTextBasedOnUserTime } from './helpers';
import { HomeContainer, HomeDownIcon, HomeTitle, HomeTitleName } from './styles';
import { IoArrowDownCircleSharp } from 'react-icons/io5';
import { COLORS } from '../../constants/colors';

const Home = () => {
  const handleDownClick = () =>
    window.scrollTo({ top: document.documentElement.clientHeight, behavior: 'smooth' });

  const welcomeText = getWelcomeTextBasedOnUserTime();

  return (
    <HomeContainer>
      <HomeTitle>
        {welcomeText} I&apos;m <HomeTitleName>Douglas Silva</HomeTitleName>.
        <br />A software developer from Porto Alegre, Brazil.
      </HomeTitle>
      <HomeDownIcon onClick={handleDownClick}>
        <IoArrowDownCircleSharp color={COLORS.secondaryFont} size="50" />
      </HomeDownIcon>
    </HomeContainer>
  );
};

export default Home;
