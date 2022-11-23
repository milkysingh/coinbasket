import SideNav from './components/SideNav';
import './App.css';
import Header from './components/Header';
import styled from 'styled-components/macro';

function App() {
  return (
    <Wrapper>
      <SideNav />
      <Container>
        <Header />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  padding-top: 30px;
  padding-left: 30px;
`;

const Container = styled.div`
  flex-grow: 3;
  border: 1px solid yellow;
`;

export default App;
