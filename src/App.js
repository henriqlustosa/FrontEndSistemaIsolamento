import {  Routes, Route} from 'react-router-dom';

import AllPacientesPage from './pages/AllPacientes';
import NewPacientePage from './pages/NewPaciente';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';
import Lay from './components/users/Layout';
import Login from './components/users/Login';


const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}


function App() {
  return (
    <div>
	
      <Layout>
	  
      <Routes>
	
        <Route path="/login" element={<Login />} />
	
        <Route exact path="/" element={<AllPacientesPage />} />
        <Route path="/new-paciente" element={<NewPacientePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>

      </Layout>

    </div>
  );
}

export default App;
