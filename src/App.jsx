import './App.css';
import Layout from './layout/Layout';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Trail from './pages/Trail/Trail';
import ContentVisualizer from './pages/ContentVisualizer/ContentVisualizer';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trilha/ux" element={<Trail />} />
          <Route path="/trilha/qa" element={<Trail />} />
          <Route path="/trilha/dev" element={<Trail />} />
          <Route path="/visualizacao" element={<ContentVisualizer />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
