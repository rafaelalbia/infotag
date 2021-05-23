import styled from 'styled-components';

const Container = styled.div`
  display: ${({ display }) => display};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  justify-content: ${({ justifyContent }) => justifyContent};
  align: ${({ align }) => align};
  text-align: ${({ textAlign }) => textAlign};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ width }) => width};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor }) => backgroundColor};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  flex-direction: ${({ flexDirection }) => flexDirection};
`;

export default Container;
