import { Link, useLocation } from "react-router-dom";
import logo from './logo.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from "componentes/CabecalhoLink";


function Cabecalho() {

    return (
        <header className={styles.cabecalho}>
            <Link to="/">
                <img src={logo} alt="Logo do AluraFlix" className={styles.logo}></img>
            </Link>
            <nav>
                <CabecalhoLink to="/">
                    Home
                </CabecalhoLink>
                <CabecalhoLink to="/NovoVideo">
                    Novo Vídeo
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;