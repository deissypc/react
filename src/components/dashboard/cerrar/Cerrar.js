import './cerrar.css';
import '../../../pages/dashboard/dashboard.css';
import {Link} from 'react-router-dom';

function Cerrar() {
  return (
    <div class="h">
   <Link to="/"> <p><i class="fa-solid fa-arrow-right-from-bracket"></i>Cerrar sesion </p> </Link>  
    </div>
           
           
  );
}

export default Cerrar;