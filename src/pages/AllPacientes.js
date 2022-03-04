import { useState, useEffect } from 'react';

import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

import PacienteList from '../components/pacientes/PacienteList';

function AllPacientesPage() {
  
  const [loadedPacientes, setLoadedPacientes] = useState([]);
  
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
        try {
            const response = await axiosPrivate.get('/pacientes', {
                signal: controller.signal
            });
            console.log(response.data.content);
            isMounted && setLoadedPacientes(response.data.content);
        } catch (err) {
            console.error(err);
            navigate('/login', { state: { from: location }, replace: true });
        }
    }

    getUsers();

    return () => {
        isMounted = false;
        controller.abort();
    }
}, [axiosPrivate, location, navigate])
       


  return (
    <section>
      <h1>All Pacientes</h1>
      <PacienteList pacientes={loadedPacientes} />
    </section>
  );
}

export default AllPacientesPage;