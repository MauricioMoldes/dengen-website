import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SamplePage from './pages/SamplePage';
import SVPage from './pages/SVPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
	<Route path="/qc" element={<SamplePage/>} />
	<Route path="/sv-qc" element={<SVPage/>} />
      </Routes>
    </Router>
  );
}


export default App;
