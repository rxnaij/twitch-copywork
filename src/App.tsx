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
        <SpacePlaceholder />
      </Main>
    </div>
  );
}

const Main = styled.main`
  min-height: 100%;

  position: relative;

  display: flex;
  flex-direction: row;
  gap: 30px;    // this + <Spacer /> substitutes padding in <MainContent />
`

const MainContent = styled.div`
  /* padding: 0 30px; */
  flex: 1 1 0;
`

const SpacePlaceholder = styled.div`
  flex: 0 100000 0;
`

export default App;
