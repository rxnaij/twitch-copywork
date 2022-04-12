import './App.css';
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
