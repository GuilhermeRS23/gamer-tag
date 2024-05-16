import style from './PadraoContainer.module.css';

const PadraoContainer = ({ children }) => {
    return(
        <section className={style.container}>
            {children}
        </section>
    )
}

export default PadraoContainer;
