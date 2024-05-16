import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Favoritos from "Pages/Favoritos";
import Cabecalho from "Components/Cabecalho";
import Rodape from "Components/Rodape";
import PadraoContainer from "Components/PadraoContainer";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Cabecalho />
            <PadraoContainer>
                <Routes>
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/favoritos" element={<Favoritos />}></Route>
                </Routes>
            </PadraoContainer>
            <Rodape />
        </BrowserRouter>

    )
}

export default AppRoutes;
