import styles from './Form.module.css';

function VideoNovo() {
    return(
        <>
        <header className={styles.form__header}>
            <h1 className={styles.form__h1}>NOVO VÍDEO</h1>
            <p className={styles.form__p}>Complete o formulário para criar um novo card de vídeo.</p>
        </header>
        
        <section className={styles.form__section}>
            <div className={styles.form__container__h2}>
            </div>
            <h2 className={styles.form__h2}>Criar Card</h2>
            <div className={styles.form__container__h2}>
            </div>
            <form className={styles.form__formulario}>
                <div className={styles.form__container}>
                    <label className={styles.form__label}>Titulo</label>
                    <input className={styles.form__input} type="text" placeholder='Digite o título' required></input>
                </div>
                <div className={styles.form__container}>
                    <label className={styles.form__label}>Categoria</label>
                    <select className={styles.form__selecao} required>
                        <option className={styles.form__opcao} disabled selected>Selecione uma categoria</option>
                        <option className={styles.form__opcao}>Front End</option>
                        <option className={styles.form__opcao}>Back End</option>
                        <option className={styles.form__opcao}>Mobile</option>
                    </select>
                </div>
                <div className={styles.form__container}>
                    <label className={styles.form__label}>Imagem</label>
                    <input className={styles.form__input} type="text" placeholder='Cole o link da imagem de capa' required></input>
                </div>
                <div className={styles.form__container}>
                    <label className={styles.form__label}>Vídeo</label>
                    <input className={styles.form__input} type="text" placeholder='Cole o link do vídeo' required></input>
                </div>
                <div className={styles.form__container}>
                    <label className={styles.form__label}>Descrição do vídeo</label>
                    <textarea className={styles.form__textarea} placeholder='Digite a descrição do vídeo' required></textarea>
                </div>
                <div className={styles.form__container__btn}>
                    <button className={styles.form__btn__enviar}>Enviar</button>
                    <button className={styles.form__btn__cancelar}>Cancelar</button>
                </div>
            </form>
        </section>
        </>
    )
}

export default VideoNovo;