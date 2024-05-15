import style from './Titulo.module.css';

const Titulo = ({ children }) => {
    return (
        <div className={style.texto}>
            {children}
        </div>
    )
}

export default Titulo; 
