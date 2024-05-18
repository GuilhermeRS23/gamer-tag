import style from './Player.module.css';
import Banner from 'Components/Banner';
import Titulo from 'Components/Titulo';
import Erro404 from 'Pages/Erro404';
import jogosVideos from 'json/db.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Player = () => {
    const [video, setVideo] = useState();
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/GuilhermeRS23/gamer-tag-api/jogos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(...dados)
            })
    }, []);

    if (!video) {
        return < Erro404 />
    }

    return (
        <>
            <Banner imagem='player' />
            <Titulo>
                <h1>Player</h1>
            </Titulo >
            <section className={style.container}>
                <iframe frameBorder="0"
                    width="100%" height="100%"
                    src={video.link}
                    title={video.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>
        </>
    )
}

export default Player;
