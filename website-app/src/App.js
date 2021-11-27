import './css/App.css';

import Navigation from './components/Navigation.js';
import  Gallery from './components/Gallery.js';

function App() {
  return (
    <div className="App">
      <div id="page-container">
        <Navigation />
        <div id="content-container">
           <Gallery />
        </div>
      </div>
      
    </div>
  );
}

export default App;
