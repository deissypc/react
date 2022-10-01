import Bienvenido from '../../components/formulario/bienvenido/Bienvenido';
import Titulo from '../../components/formulario/titulo/Titulo';
import Campo from '../../components/formulario/campo/Campo';
import Caja from '../../components/formulario/caja/Caja';
import Mod from '../../components/formulario/modal/Modal';

import './formulario.css';


function Formulario() {
  return (
    <section id="formulario">
    <div class="conten">
<Bienvenido/>
<div class="dat">
            <div class="dat1">
                <div class="t">          
             <div>
              <Titulo/>
            
              <Campo/>
              
              </div>
              <div>
              <Caja/>
              <Mod/>
              </div>
                </div>
            </div>
</div>
     </div>
    </section>
  );
}

export default Formulario;