import NovoVideo from "pages/Criar";
import Inicio from "pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/NovoVideo" element={<NovoVideo/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;