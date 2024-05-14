import { Link } from "react-router-dom";
import style from "./CabecalhoLink.module.css"

const CabecalhoLink = ({ url, children }) => {
    return (
        <Link to={url} className={style.link}>
            {children}
        </Link>
    )
}

export default CabecalhoLink;
