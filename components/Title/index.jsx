import { string } from 'prop-types';
import { StyledTitle } from './styles';

const Title = ({ text, padding, color }) => {
  return (
    <StyledTitle padding={padding} color={color}>
      {text}
    </StyledTitle>
  );
};

Title.propTypes = {
  text: string.isRequired,
  padding: string,
  color: string,
};

export default Title;
