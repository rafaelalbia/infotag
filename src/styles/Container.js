import styled from 'styled-components';

const Container = styled.div`
  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  align: ${({ align }) => align};
  text-align: ${({ textAlign }) => textAlign};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ width }) => width};
  padding-top: ${({ paddingTop }) => paddingTop};
`;

export default Container;