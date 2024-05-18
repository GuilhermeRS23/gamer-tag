import style from './Card.module.css';
import iconeFavoritar from './favorite_outline.png';
import iconeFavorito from './favorite.png';
import { useFavoritoContext } from 'Contexts/Favoritos';
import { Link } from 'react-router-dom';


const Card = ({ id, titulo, capa }) => {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = ehFavorito ? iconeFavorito : iconeFavoritar;

    return (
        <div className={style.container}>
            <Link className={style.link} to={`/${id}`}>
                <img src={capa}
                    alt={titulo}
                    className={style.capa}
                />
                <h2>
                    {titulo}
                </h2>
            </Link>

            <img className={style.favoritar}
                src={icone}
                alt='Favoritar'
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa })
                }}
            />
        </div>
    )
}

export default Card;