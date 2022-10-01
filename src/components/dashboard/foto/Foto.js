import './foto.css';
import foto from './ñ.png';
import '../../../pages/dashboard/dashboard.css';

function Foto() {
  return (
    <div class="d">
     <img src={foto}/>
    <br></br>
    <div class="sub">
    <i class="fa-solid fa-file-arrow-up"></i><i class="fa-solid fa-download"></i>
</div>
    <br></br>
    <button class="v"><a href="" class="z">Cambiar contraseña</a></button>
</div>   

  );
}

export default Foto;