import styled from 'styled-components';

const Button = styled.button`
  height: ${({ height }) => height };
  width: ${({ width }) => width };
  border-radius: ${({ borderRadius }) => borderRadius };
  background-color: ${({ backgroundColor }) => backgroundColor };
  border: none;
  font-size: ${({ fontSize }) => fontSize };
  color: white;
  box-shadow: ${({ boxShadow }) => boxShadow };
  margin-top: ${({ marginTop }) => marginTop };
`;

export default Button;
