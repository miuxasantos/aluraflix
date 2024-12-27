import styles from './MainConteudo.module.css';
import ConteudoFront from './ConteudoFront/index';
import ConteudoBack from './ConteudoBack';
import ConteudoMobile from './ConteudoMobile';

function MainConteudo({ onEditClick }) {


    return (
        <main className={styles.main}>
            <ConteudoFront onEditClick={onEditClick} />
            <ConteudoBack onEditClick={onEditClick} />
            <ConteudoMobile onEditClick={onEditClick} />
        </main>
    )
}

export default MainConteudo;