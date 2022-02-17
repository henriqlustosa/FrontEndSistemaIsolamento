import { useState, useEffect } from 'react';

import PacienteList from '../components/pacientes/PacienteList';

function AllPacientesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPacientes, setLoadedPacientes] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'http://intranethspm:5003/hspmsgh-api/pacientes/paciente/11209913'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const pacientes = [];

        for (const key in data) {
          const paciente = {
            id: key,
            ...data[key]
          };

          pacientes.push(paciente);
        }

        setIsLoading(false);
        setLoadedPacientes(pacientes);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Pacientes</h1>
      <PacienteList pacientes={loadedPacientes} />
    </section>
  );
}

export default AllPacientesPage;