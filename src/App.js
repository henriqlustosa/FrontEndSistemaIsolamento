import { BrowserRouter as Switch, Route} from 'react-router-dom';

import AllPacientesPage from './pages/AllPacientes';
import NewPacientePage from './pages/NewPaciente';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllPacientesPage />
        </Route>
        <Route path='/new-paciente'>
          <NewPacientePage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
