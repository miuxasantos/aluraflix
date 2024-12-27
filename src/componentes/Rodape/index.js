import styles from './Rodape.module.css';
import logo from './LogoMain.png';

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <img src={logo} className={styles.logo}></img>
            <p className={styles.p__rodape}>Desenvolvido por Miuxa 2024</p>
        </footer>
    )
}

export default Rodape;