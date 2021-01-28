import { string } from 'prop-types';
import { StyledTitle } from './styles';

const Title = ({ text, padding }) => {
  return <StyledTitle padding={padding}>{text}</StyledTitle>;
};

Title.propTypes = {
  text: string.isRequired,
  padding: string,
};

export default Title;
