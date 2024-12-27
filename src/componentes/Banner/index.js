import styles from './Banner.module.css'
import Conteudo from './Conteudo';

function Banner() {
    return (
        <section className={styles.banner}>
            <Conteudo />
        </section>
    )
}

export default Banner;