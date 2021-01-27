import { string } from 'prop-types';
import { StyledTitle } from './styles';

const Title = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

Title.propTypes = {
  text: string.isRequired,
};

export default Title;
