import style from './Card.module.css';
import iconeFavoritar from './favorite_outline.png';
import iconeFavorito from './favorite.png';


const Card = ({ capa, titulo, id }) => {
    return (
        <div className={style.container}>
            <img src={capa}
                alt={titulo}
                className={style.capa}
            />
            <h2>
                {titulo}
            </h2>

            <img className={style.favoritar}
                src={iconeFavoritar}
                alt='Favoritar'
            />
        </div>
    )
}

export default Card;