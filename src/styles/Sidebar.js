import styled from 'styled-components';

const Sidebar = styled.nav`
  display: table-cell;
  float: left;
  height: 91.3%;
  width: 4.687rem;
  background-color: #f5f5f5;
  text-align: center;
  vertical-align: middle;
`;

Sidebar.Item = styled.div`
  height: 2.812rem;
  width: 100%;
  position: relative;
  top: ${({ top }) => top };
`;

export default Sidebar;