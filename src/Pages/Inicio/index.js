import Banner from "Components/Banner";
import Titulo from "Components/Titulo";
import Card from "Components/Card";
import style from "./Inicio.module.css";
import jogos from "json/db.json";

const Inicio = () => {
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