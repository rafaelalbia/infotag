import styled from 'styled-components';

const Text = styled.h1`
  color: ${({ color }) => color };
  font-size: ${({ fontSize }) => fontSize };
  font-weight: ${({ fontWeight }) => fontWeight };
  font-family: ${({ fontFamily }) => fontFamily };
  float: ${({ float }) => float};
  padding-bottom: ${({ paddingBottom }) => paddingBottom };
  margin-bottom: ${({ marginBottom }) => marginBottom };
  margin-top: ${({ marginTop }) => marginTop };
  text-align: ${({ textAlign }) => textAlign };
`;

export default Text;
