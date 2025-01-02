import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoremIpsumPage from './pages/LoremIpsumPage';
import SamplePage from './pages/SamplePage';
import SVPage from './pages/SVPage';
import QCLandingPage from './pages/QCLandingPage';
import FastQCPage from './pages/FastQCPage';
import VariantPage from './pages/VariantPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/lorem" element={<LoremIpsumPage/>} />
	      <Route path="/qc" element={<SamplePage/>} />
	      <Route path="/sv-qc" element={<SVPage/>} />
        <Route path="/landing" element={<QCLandingPage/>} />        
        <Route path="/fastqc" element={<FastQCPage/>} />        
        <Route path="/alignment" element={<VariantPage/>} />
        <Route path="/variant" element={<VariantPage/>} />
      </Routes>
    </Router>
  );
}


export default App;
