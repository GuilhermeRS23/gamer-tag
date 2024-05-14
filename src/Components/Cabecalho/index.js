import { Link } from "react-router-dom";
import style from "./Cabecalho.module.css";
import CabecalhoLink from "./CabecalhoLink";
//import logo from ''; Logo para src

const Cabecalho = () => {
    return (
        <header className={style.cabecalho}>
            <Link to={'./'}>
                <img src='' alt="Logo da Página" />
            </Link>
            <nav>
                <CabecalhoLink url={'./'}>Home</CabecalhoLink>
                <CabecalhoLink url={'./Favoritos'}>Favoritos</CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;