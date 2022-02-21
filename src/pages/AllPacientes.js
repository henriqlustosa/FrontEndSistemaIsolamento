import { useState, useEffect } from 'react';

import PacienteList from '../components/pacientes/PacienteList';

function AllPacientesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPacientes, setLoadedPacientes] = useState([]);

  useEffect(() => {
    setIsLoading(true);
  
  
    return fetch('http://localhost:8080/pacientes', {
      method: 'GET',
      headers:{
        Accept: 'application/json',
                 'Content-Type': 'application/json',
                 'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIn0.FcsRJwIQjQFKxKKgpyRbdY0Xdq-EGe9AApN1JfA8d4A"
         },
    })
      .then((response) => {
        
        return response.json();
      })
      .then((data) => {
        const pacientes = [];
var objCount = data.content.length;

for (var x = 0; x < objCount; x++) {
  var curitem = data.content[x]
  pacientes.push(curitem);
  
}
       // console.log(data.content);
       // for (const key in data.content) {
         // const paciente = {
          //  id: key,
          //  ...data[key]
         // };
        //  pacientes.push(data.content[0]);
        //  console.log(pacientes)
        //}
       
        setIsLoading(false);
        setLoadedPacientes(pacientes);
     console.log(pacientes)
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