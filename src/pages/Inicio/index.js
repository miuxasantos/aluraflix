import Banner from "componentes/Banner";
import Cabecalho from "componentes/Cabecalho";
import MainConteudoWrapper from "componentes/ConteudoWrapper";
import ModalEditar from "componentes/ModalEditar";
import Rodape from "componentes/Rodape";

function Inicio() {
    return (
        <>
        <Cabecalho />
        <Banner />
        <MainConteudoWrapper />
        <Rodape />
        </>
    )
}

export default Inicio;