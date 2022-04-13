import './App.css';
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Sidebar />
        <section>
          <h2>Live channels we think you'll like</h2>
          <div className="thumbnail-container">
            <img src="" alt="" />
            <span>Live</span>
            <span>19.4K viewers</span>
          </div>
          <div className="channel-info">
            <div className="profile-image-container">
              <img src="" alt="" />
            </div>
            <div className="channel-info">
              <h3>Title Goes Here</h3>
              <span>loltyler1</span>
              <span>League of Legends</span>
              <div className='tags'>
                <span>English</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
