import './App.css';
import styled from 'styled-components'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import LiveChannelsSection from './components/LiveChannelsSection';
import CategoriesSection from './components/CategoriesSection';
import SignUpBanner from './components/SignUpBanner/SignUpBanner';

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Sidebar />
      <Main>
        <LiveChannelsSection />
        <CategoriesSection />
      </Main>
      <SignUpBanner />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;

  position: relative;

  display: grid;
  grid-template-columns: fit-content 1fr; // Adapts to width of sidebar
  grid-template-rows: 50px calc(100vh - 50px) 1fr;

  grid-template-areas: 
    "navbar navbar"
    "sidebar main-content"
    ". main-content"
  ;
`

const Main = styled.main`
  grid-area: main-content;
  min-height: 100%;

  display: flex;
  flex-direction: column;

  padding: 0 30px;
`

export default App;
