import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  height: 100vh;
`;

Section.MainDiv = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default Section;
