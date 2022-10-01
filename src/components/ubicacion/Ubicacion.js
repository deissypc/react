import './Ubicacion.css';
import Iframe from 'react-iframe'

function  Ubicacion(){
    return(
<section id="ubicacion">
<h1>ubicanos</h1>
<Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9644418629905!2d-74.0752787!3d4.6003919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7147877c9%3A0x378b95e9cbda0740!2sCra.%208%20%2312a-42%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1664608601884!5m2!1ses!2sco" width="1350" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
<p class="dirreccion" >AVENIDA CARRERA 8, #12A-42, BOGOTÁ DC, COLOMBIA</p> 
<p class="dirreccions"> +57 601 4567899</p> <br></br><br></br>
</section>
)};
export default Ubicacion;