import { ReactElement } from 'react';
import style from './Titulo.module.css';

interface Prpos {
children: ReactElement | string
}

const Titulo = ({ children } : Prpos) => {
    return (
        <div className={style.texto}>
            {children}
        </div>
    )
}

export default Titulo; 
