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

Sidebar.Enabled = styled.button`
  height: 60px;
  width: 100%;
  align-items: center;
  position: relative;
  border: none;
  top: ${({ top }) => top };
  background-color: rgba(126, 92, 191, 0.15);
`;

Sidebar.Item = styled.button`
  height: 60px;
  width: 100%;
  align-items: center;
  position: relative;
  border: none;
  top: ${({ top }) => top };
`;

export default Sidebar;