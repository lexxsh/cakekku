
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.color ? props.color : 'white')};
`;

const Width = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 78px;
  align-items: center;
  background-color: ${(props) => (props.color ? props.color : 'white')};
  overflow: hidden;
  @media (min-width: 400px) {
    width: 360px;
  }
`;

const Layout = ({ children, color }) => (
  <Background color={color}>
    <Width color={color}>{children}</Width>
  </Background>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout;