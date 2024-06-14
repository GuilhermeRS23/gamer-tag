import { Link } from "react-router-dom";
import style from "./CabecalhoLink.module.css"
import { ReactElement } from "react";

interface Prpos{
    url: string
    children: ReactElement | string
}

const CabecalhoLink = ({ url, children } : Prpos) => {
    return (
        <Link to={url} className={style.link}>
            {children}
        </Link>
    )
}

export default CabecalhoLink;
