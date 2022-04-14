import './App.css';
import styled from 'styled-components'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import LiveChannelsSection from './components/LiveChannelsSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main>
        <Sidebar />
        <MainContent>
          <LiveChannelsSection />
        </MainContent>
      </Main>
    </div>
  );
}

const Main = styled.main`
  position: relative;

  display: flex;
  flex-direction: row;
`

const MainContent = styled.div`
  padding: 0 30px;
`

export default App;
