import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  height: 100vh;
`;

Section.MainDiv = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight};
  align-items: ${({ alignItems }) => alignItems};
  position: ${({ position }) => position};
  margin-left: ${({ marginLeft }) => marginLeft};
`;

export default Section;
