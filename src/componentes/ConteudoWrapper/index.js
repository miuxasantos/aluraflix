import MainConteudo from "componentes/MainConteudo";
import { useState } from "react";
import ModalEditar from "componentes/ModalEditar";

const MainConteudoWrapper = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Controla a visibilidade da modal.

    const handleOpenModal = () => {
        setIsModalOpen(true); // Abre a modal.
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Fecha a modal.
    };

    return (
        <>
            <MainConteudo onEditClick={handleOpenModal} />
            {isModalOpen && <ModalEditar onClose={handleCloseModal} />}
        </>
    );
};

export default MainConteudoWrapper;