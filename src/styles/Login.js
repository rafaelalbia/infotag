import styled from 'styled-components';
import arrow from '../images/arrow.png'

const Login = styled.button`
  height: 3.31rem;
  width: 14.75rem;
  background: linear-gradient(90deg, #6B75C3 0%, rgba(107, 117, 195, 0.6) 100%);
  border-radius: 3px 0px 0px 3px;
  color: rgba(255, 255, 255, 0.75);
  border: none;
  font-size:1.25rem;
  font-weight: regular;
  font-family: Inria Sans;
  padding-left: 1.437rem;
  text-align: left;
`;

Login.Succeed = styled.button`
  height: 3.312rem;
  width: 3.125rem;
  background-image: url('${arrow}');
  background-repeat: no-repeat;
  background-color: #6B75C3;
  background-size: 1.25rem auto;
  background-position: center;
  border: none;
`;

export default Login;
