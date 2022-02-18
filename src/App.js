import {  Routes, Route} from 'react-router-dom';

import AllPacientesPage from './pages/AllPacientes';
import NewPacientePage from './pages/NewPaciente';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';



function App() {
  return (
    <div>
      <Layout>
      <Routes>
        <Route exact path="/" element={<AllPacientesPage />} />
        <Route path="/new-paciente" element={<NewPacientePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
