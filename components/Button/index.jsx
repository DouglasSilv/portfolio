import { bool, string } from 'prop-types';
import Loading from '../../assets/Loading';
import { StyledButton } from './styles';

const Button = ({ text, margin, isLoading }) => {
  return (
    <StyledButton margin={margin}>
      {isLoading ? <Loading width="32" height="32" /> : text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: string.isRequired,
  margin: string,
  isLoading: bool,
};

export default Button;
