import './bienvenido.css';
import log from './Hotelia horizontal blanco.svg';
import '../../../pages/formulario/formulario.css';


function Bienvenido() {
  return (
    <div class="bien">
             <img src={log} className="j" />
           
            <br></br>
            <h1>Eres mas que 
                <br></br>
                bienvenido
            </h1>
        </div>
  );
}

export default Bienvenido;