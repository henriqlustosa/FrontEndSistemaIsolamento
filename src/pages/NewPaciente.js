import { BrowserRouter as useHistory } from 'react-router-dom';

import NewPacienteForm from '../components/pacientes/NewPacienteForm';

function NewPacientePage() {
  const history = useHistory();

  function addPacienteHandler(pacienteData) {
    fetch(
      'http://10.84.3.21:8080/pacientes',
      {
        method: 'POST',
        body: JSON.stringify(pacienteData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Paciente</h1>
      <NewPacienteForm onAddPaciente={addPacienteHandler} />
    </section>
  );
}

export default NewPacientePage;