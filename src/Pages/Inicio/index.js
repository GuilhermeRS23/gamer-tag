import Banner from "Components/Banner";
import Titulo from "Components/Titulo";
import Card from "Components/Card";
import style from "./Inicio.module.css";
import { useEffect, useState } from "react";

const Inicio = () => {
    const [jogos, setJogos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/GuilhermeRS23/gamer-tag-api/jogos')
            .then(resposta => resposta.json())
            .then(dados => {
                setJogos(dados)
            })
    }, []);

    return (
        <>
            <Banner imagem='home' />
            <Titulo>
                <h1>Um lugar para guardar e listar seus Games preferidos!</h1>
            </Titulo>

            <section className={style.container}>
                {jogos.map((jogo) => {
                    return <Card {...jogo} key={jogo.id} />
                })}
            </section>
        </>
    )
}

export default Inicio;