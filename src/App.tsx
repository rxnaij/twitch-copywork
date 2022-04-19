import './App.css';
import styled from 'styled-components'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import LiveChannelsSection from './components/LiveChannelsSection';
import CategoriesSection from './components/CategoriesSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main>
        <Sidebar />
        <MainContent>
          <LiveChannelsSection />
          <CategoriesSection />
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
  flex: 1 0 0;
`

export default App;
