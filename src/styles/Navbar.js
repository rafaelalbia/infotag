import styled from 'styled-components';

const Navbar = styled.nav`
  height: 5.312rem;
  background-color: #FEFEFE;
  border-radius: 0px 35px 0px 0px;
`;

Navbar.Seach = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid #DADADA;
  box-sizing: border-box;
  border-radius: 15px;
  margin-top: ${({ marginTop }) => marginTop};
  margin-left: ${({ marginLeft }) => marginLeft};
`;

Navbar.Loggout = styled.button`
  height: 2.125rem;
  width: 5.375rem;
  background-color: rgba(196, 196, 196, 0.1);
  border: 1px solid #AEAEAE;
  box-sizing: border-box;
  border-radius: 8px;
  float: right;
  margin-top: 1.625rem;
  margin-right: 3.062rem;
`;

export default Navbar;
