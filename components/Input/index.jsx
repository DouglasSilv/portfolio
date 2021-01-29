import { bool, string } from 'prop-types';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const Input = ({ textArea, placeholder, margin, isRequired, type, name }) => {
  return textArea ? (
    <StyledTextArea placeholder={placeholder} margin={margin} required={isRequired} name={name} />
  ) : (
    <StyledInput
      placeholder={placeholder}
      margin={margin}
      required={isRequired}
      type={type}
      name={name}
    />
  );
};

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: ${COLORS.secondaryBackground};
  color: ${COLORS.font};
  border: none;
  padding: 15px;
  margin: ${({ margin }) => margin};

  :focus {
    outline: none;
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  background-color: ${COLORS.secondaryBackground};
  color: ${COLORS.font};
  border: none;
  padding: 15px;
  resize: none;
  margin: ${({ margin }) => margin};

  :focus {
    outline: none;
  }
`;

Input.propTypes = {
  textArea: bool,
  placeholder: string,
  margin: string,
  isRequired: bool,
  type: string,
  name: string,
};

export default Input;
