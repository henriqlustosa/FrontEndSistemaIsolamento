import { Link } from "react-router-dom";

import AllPacientesPage from '../pages/AllPacientes';



const Admin = () => {
    return (
        <section>
            <h1>Admins Page</h1>
            <br />
            <AllPacientesPage />
            <br />
           <div className="flexGrow">
               <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Admin
