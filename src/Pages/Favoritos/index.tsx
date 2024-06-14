import { useFavoritoContext } from '../../contexts/Favoritos';
import style from './Favoritos.module.css';
import Card from '../../components/Card';
import Banner from '../../components/Banner';
import Titulo from '../../components/Titulo';

const Favoritos = () => {
    const { favorito } = useFavoritoContext();
    const conteudo = favorito.length === 0 ? 
    <h1>Ainda não foram adicionados Favoritos a lista</h1> :
        <section className={style.container}>
            {favorito.map((fav) => {
                return <Card {...fav} key={fav.id} />
            })}
        </section>

    //Código provisório
    // const favorito = jogos.sort((a,b)=> b.id - a.id)
    // .slice(0, 3);

    return (
        <>
            <Banner imagem={"favoritos"} />
            <Titulo>
                <h1>Meus Jogos Favoritos.</h1>
            </Titulo>
            { conteudo }
        </>
    )
}

export default Favoritos;
