import './App.css';
import './styles/global.css';
import { Signin, Signup } from './components';
import { Authentication } from './pages';

import './App.css';
import LandingPage from './components/LandingPage';
import { Routes, Route } from "react-router-dom"
import TourDetail from './pages/TourDetail/TourDetail';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/tourDetail" element={<TourDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
