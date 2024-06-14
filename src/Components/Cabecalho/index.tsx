import { Link } from "react-router-dom";
import style from "./Cabecalho.module.css";
import CabecalhoLink from "./CabecalhoLink";
import logo from './logo.png'

const Cabecalho = () => {
    return (
        <header className={style.cabecalho}>
            <Link to={'./'}>
                <img src={logo} alt="Logo da Página" />
            </Link>
            <nav>
                <CabecalhoLink url={'./'}>Home</CabecalhoLink>
                <CabecalhoLink url={'./favoritos'}>Favoritos</CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;