import style from "./Banner.module.css";

const Banner = ({ imagem }) => {
    return (
        <div className={style.capa} 
        style={{backgroundImage:`url("/images/banner-${imagem}.png")`}}>
        </div>
    )
}

export default Banner;