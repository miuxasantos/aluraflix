import { Link } from 'react-router-dom';
import styles from './Conteudo.module.css';
import player from './player.png';

function Conteudo() {
    return (
        <div className={styles.conteudo}>
            <div>
                <h1 className={styles.titulo__banner}>FRONT END</h1>
                <h2 className={styles.subtitulo__banner}>SEO com REACT</h2>
                <p className={styles.p__banner}>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
            </div>
            <div>
                <Link>
                    <img src={player}></img>
                </Link>
            </div>
        </div>
    )
}

export default Conteudo;