import styles from './ConteudoBack.module.css';
import video1 from './imagens/video-back1.png';
import video2 from './imagens/video-back2.png';
import video3 from './imagens/video-back3.png';
import editarIcon from './imagens/Vector.png';

function ConteudoBack({ onEditClick }) {
    return (
        <section className={styles.back__section}>
            <h3 className={styles.back__titulo}>BACK END</h3>

            <div className={styles.back__videos}>
                <div className={styles.back__video__card}>
                    <img src={video1} className={styles.back__imagem}></img>
                    <div className={styles.back__editar}>
                        <button className={styles.back__botao} onClick={onEditClick}>
                            <img src={editarIcon} className={styles.back__editar__icon}></img>
                        </button>
                        <p className={styles.back__p}>Editar</p>
                    </div>
                </div>
            

            
                <div className={styles.back__video__card}>
                    <img src={video2} className={styles.back__imagem}></img>
                    <div className={styles.back__editar}>
                        <button className={styles.back__botao} onClick={onEditClick}>
                            <img src={editarIcon} className={styles.back__editar__icon}></img>
                        </button>
                        <p className={styles.back__p}>Editar</p>
                    </div>
                </div>
            
          
                <div className={styles.back__video__card}>
                    <img src={video3} className={styles.back__imagem}></img>
                    <div className={styles.back__editar}>
                        <button  className={styles.back__botao} onClick={onEditClick}>
                            <img src={editarIcon} className={styles.back__editar__icon}></img>
                        </button>
                        <p className={styles.back__p}>Editar</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConteudoBack;