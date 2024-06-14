import style from './Player.module.css';
// import jogosVideos from 'json/db.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Erro404 from '../Erro404';
import Banner from '../../components/Banner';
import Titulo from '../../components/Titulo';

interface Video {
    id: number
    link: string
    titulo: string
}

const Player = () => {
    const [video, setVideo] = useState<Video | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/GuilhermeRS23/gamer-tag-api/jogos?id=${id}`)
            .then(resposta => resposta.json())
            .then((dados: Video[]) => {
                if (dados.length > 0) {
                    setVideo(dados[0])
                } else {
                    setVideo(null)
                }
            })
    }, [id]);

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
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

                </iframe>
            </section>
        </>
    )
}

export default Player;
