import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home.jsx';
import About from './pages/about.jsx'
import License from './pages/license.jsx';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/license" element={<License />} />
      </Routes>
    </BrowserRouter>
  )
}
