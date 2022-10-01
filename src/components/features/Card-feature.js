import './Feature.css';
function CardFeature({texto,background,icono}){
    return(
        <article className={background? "feature feature-blue":"feature feature-black"}>
            <i className={icono}></i>
            <h3>{texto}</h3>
        </article>
    )
}
export default CardFeature;