import styled from 'styled-components';
import twitter from '../images/twitter.png';

const Text = styled.h1`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize };
  font-weight: ${({ fontWeight }) => fontWeight };
  font-family: ${({ fontFamily }) => fontFamily };
  vertical-align: center;
  float: ${({ float }) => float};
`;

Text.Icon = styled.div`
  height: 2.125rem;
  width: 2.625rem;
  background-image: url('${twitter}');
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export default Text;
