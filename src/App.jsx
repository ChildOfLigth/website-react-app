import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import InfoMonblan from './components/InfoMonblan';
import InfoPlacesMonblan from './components/InfoPlacesMonblan';

function App() {
  return (
    <BrowserRouter >
   
      <div className="App">
          <Routes>
            <Route path="/website-react-app" element={<InfoMonblan />} />
            <Route path="/places-monblan" element={<InfoPlacesMonblan />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;