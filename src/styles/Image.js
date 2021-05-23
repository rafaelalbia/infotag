import styled from 'styled-components';

const Image = styled.img`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  opacity: ${({ opacity }) => opacity};
`;

export default Image;