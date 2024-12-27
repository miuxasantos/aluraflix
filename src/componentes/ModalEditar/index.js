import styles from './ModalEditar.module.css';


const ModalEditar = ({ onClose }) => {

    const handleCloseModal = () => {
        onClose();
    };

    return (
        <>
        <dialog className={styles.modal__dialog} open={true}>
            <h2 className={styles.modal__titulo}>Editar Card:</h2>
            <form className={styles.modal__form} method="dialog">
                <div className={styles.modal__container}>
                    <label className={styles.modal__label}>Título</label>
                    <input className={styles.modal__input} type="text" placeholder='Digite o título' required></input>
                </div>

                <div className={styles.modal__container}>
                    <label className={styles.modal__label}>Categoria</label>
                    <select className={styles.modal__select} required>
                        <option className={styles.modal__option} disabled selected>Selecione uma categoria</option>
                        <option className={styles.modal__option}>Front End</option>
                        <option className={styles.modal__option}>Back End</option>
                        <option className={styles.modal__option}>Mobile</option>
                    </select>
                </div>

                <div className={styles.modal__container}>
                    <label className={styles.modal__label}>Imagem</label>
                    <input className={styles.modal__input} type="text" placeholder='Cole o link da imagem de capa' required></input>
                </div>

                <div className={styles.modal__container}>
                    <label className={styles.modal__label}>Vídeo</label>
                    <input className={styles.modal__input} type="text" placeholder='Cole o link do vídeo' required></input>
                </div>

                <div className={styles.modal__container}>
                    <label className={styles.modal__label}>Descrição do vídeo</label>
                    <textarea className={styles.modal__textarea} placeholder='Digite a descrição do vídeo' required></textarea>
                </div>

                <div className={styles.modal__container__btn}>
                    <button className={styles.modal__enviar} type="submit">Enviar</button>
                    <button className={styles.modal__fechar} onClick={onClose} type="">Fechar</button>
                </div>
            </form>
        </dialog>
        </>
    )
}

export default ModalEditar;