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
          <Route
            path="/trilha/ux"
            element={
              <Trail
                title="Ux Design"
                duration="5h 26min"
                contentNumber="25"
                expirationDate="24/10/2023"
                description="Entenda as necessidades do seu usuário e construa experiências inspiradoras."
                progress="20"
              />
            }
          />
          <Route
            path="/trilha/qa"
            element={
              <Trail
                title="Quality Assurance (QA)"
                duration="5h 31min"
                contentNumber="20"
                expirationDate="24/10/2023"
                description="Testando qualidade de aplicações e códigos"
                progress="5"
              />
            }
          />
          <Route
            path="/trilha/dev"
            element={
              <Trail
                title="Desenvolvimento Full Stack"
                duration="7h 18min"
                contentNumber="35"
                expirationDate="24/10/2023"
                description="Programação e Desenvolvimento de aplicações completas usando as mais modernas tecnologias do mercado"
                progress="75"
              />
            }
          />
          <Route path="/visualizacao" element={<ContentVisualizer />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
