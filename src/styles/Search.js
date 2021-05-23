import styled from 'styled-components';

const Search = styled.input`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid #DADADA;
  box-sizing: border-box;
  border-radius: 15px;
  margin-top: ${({ marginTop }) => marginTop};
  margin-left: ${({ marginLeft }) => marginLeft};
`;

export default Search;
