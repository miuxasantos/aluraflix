import styles from './ConteudoFront.module.css';
import editarIcon from './imagens/Vector.png';
import video1 from './imagens/video-front1.png';
import video2 from './imagens/video-front2.png';
import video3 from './imagens/video-front3.png';

function FrontSection ({ onEditClick }) {
    return (
        <section className={styles.front__section}>
            <h3 className={styles.front__titulo}>FRONT END</h3>

            <div className={styles.front__videos}>
                <div className={styles.front__video__card}>
                    <img src={video1} className={styles.front__imagem}></img>
                    <div className={styles.front__editar}>
                        <button className={styles.front__botao} onClick={onEditClick}>
                            <img src={editarIcon} className={styles.front__editar__icon}></img>
                        </button>
                        <p className={styles.front__p}>Editar</p>
                    </div>
                </div>

                <div className={styles.front__video__card}>
                    <img src={video2} className={styles.front__imagem}></img>
                    <div className={styles.front__editar}>
                        <button className={styles.front__botao} onClick={onEditClick}>
                            <img src={editarIcon} className={styles.front__editar__icon}></img>
                        </button>
                        <p className={styles.front__p}>Editar</p>
                    </div>
                </div>

                <div className={styles.front__video__card}>
                    <img src={video3} className={styles.front__imagem}></img>
                    <div className={styles.front__editar}>
                        <button className={styles.front__botao} onClick={onEditClick}>
                            <img src={editarIcon} className={styles.front__editar__icon}></img>
                        </button>
                        <p className={styles.front__p}>Editar</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FrontSection;