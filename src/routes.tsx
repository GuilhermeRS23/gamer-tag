import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Favoritos";
import Player from "./pages/Player";
import Erro404 from "./pages/Erro404";
import PaginaPadrao from "./pages/PaginaPadrao";

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
