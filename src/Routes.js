import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Favoritos from "Pages/Favoritos";
import Player from "Pages/Player";
import Erro404 from "Pages/Erro404";
import PaginaPadrao from "Pages/PaginaPadrao";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<Erro404 />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes;
