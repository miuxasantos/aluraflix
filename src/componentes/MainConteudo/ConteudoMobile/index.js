import styles from './ConteudoMobile.module.css';
import video1 from './imagens/video-mobile1.png';
import video2 from './imagens/video-mobile2.png';
import video3 from './imagens/video-mobile3.png';
import editarIcon from './imagens/Vector.png';

function ConteudoMobile({ onEditClick }) {
    return (
        <section className={styles.mobile__section}>
            <h3 className={styles.mobile__titulo}>BACK END</h3>

            <div className={styles.mobile__videos}>
                <div className={styles.mobile__video__card}>
                    <img src={video1} className={styles.mobile__imagem}></img>
                    <div className={styles.mobile__editar}>
                        <button className={styles.mobile__botao} onClick={onEditClick}>
                            <img src={editarIcon} className={styles.mobile__editar__icon}></img>
                        </button>
                        <p className={styles.mobile__p}>Editar</p>
                    </div>
                </div>
            

            
                <div className={styles.mobile__video__card}>
                    <img src={video2} className={styles.mobile__imagem}></img>
                    <div className={styles.mobile__editar}>
                        <button className={styles.mobile__botao} onClick={onEditClick}>
                            <img src={editarIcon} className={styles.mobile__editar__icon}></img>
                        </button>
                        <p className={styles.mobile__p}>Editar</p>
                    </div>
                </div>
            
          
                <div className={styles.mobile__video__card}>
                    <img src={video3} className={styles.mobile__imagem}></img>
                    <div className={styles.mobile__editar}>
                        <button className={styles.mobile__botao} onClick={onEditClick}x>
                            <img src={editarIcon} className={styles.mobile__editar__icon}></img>
                        </button>
                        <p className={styles.mobile__p}>Editar</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ConteudoMobile;