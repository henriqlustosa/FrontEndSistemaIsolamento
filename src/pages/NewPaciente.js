import { useNavigate } from 'react-router-dom';

import NewPacienteForm from '../components/pacientes/NewPacienteForm';

function NewPacientePage() {
  const navigate = useNavigate();

  function addPacienteHandler(pacienteData) {
    fetch(
      'http://localhost:8080/pacientes',
      {
        method: 'POST',
        body: JSON.stringify(pacienteData),
        headers: {
          
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIn0.FcsRJwIQjQFKxKKgpyRbdY0Xdq-EGe9AApN1JfA8d4A",                    
        },
      }
    ).then(() => {
      navigate('/', { replace: true });
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