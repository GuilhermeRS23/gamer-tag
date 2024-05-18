import Cabecalho from "Components/Cabecalho";
import PadraoContainer from "Components/PadraoContainer";
import Rodape from "Components/Rodape";
import FavoritosProvider from "Contexts/Favoritos";
import { Outlet } from "react-router-dom";

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
