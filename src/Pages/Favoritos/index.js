import Banner from 'Components/Banner';
import style from './Favoritos.module.css';
import Titulo from 'Components/Titulo';
import Card from 'Components/Card';

import jogos from 'json/db.json'

const Favoritos = ( )=>{
    //Código provisório
    const favorito = jogos.sort((a,b)=> b.id - a.id)
    .slice(0, 3);

    return(
        <>
        <Banner imagem={"favoritos"}/>
        <Titulo>
            <h1>Meus Jogos Favoritos.</h1>
        </Titulo>
        {/* Código provisório */}
        <section className={style.container}>
                {favorito.map((jogo) => {
                    return <Card {...jogo} key={jogo.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;
