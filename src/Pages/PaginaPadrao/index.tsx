import FavoritosProvider from "../../contexts/Favoritos";
import { Outlet } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import PadraoContainer from "../../components/PadraoContainer";
import Rodape from "../../components/Rodape";

const PaginaPadrao = () => {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <PadraoContainer>
                    <Outlet />
                </PadraoContainer>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaPadrao;
