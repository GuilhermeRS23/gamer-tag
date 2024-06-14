import { ReactElement } from 'react';
import style from './PadraoContainer.module.css';

interface Prpos {
    children: ReactElement | string
    }

const PadraoContainer = ({ children }: Prpos) => {
    return(
        <section className={style.container}>
            {children}
        </section>
    )
}

export default PadraoContainer;
