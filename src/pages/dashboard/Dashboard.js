import Perfil from '../../components/dashboard/perfil/Perfil';
import Icono from '../../components/dashboard/icono/Icono';
import Cerrar from '../../components/dashboard/cerrar/Cerrar';
import Foto from '../../components/dashboard/foto/Foto';
import Dato from '../../components/dashboard/dato/Dato';
import Parte from '../../components/dashboard/parte/Parte';

import './dashboard.css';


function Dashboard() {
  return (
    <section id="dashboard">
    <div class="dash">
    <div class="an">
      <Perfil/>
      <Icono/>
      <Cerrar/>
      </div>

      <div class="in">
        <div class="in1">
            <div class="y">
              <Foto/>
              <Dato/>
              <Parte/>
              </div>
              </div>
            </div>
      </div>
    
      </section>
  );
}

export default Dashboard;