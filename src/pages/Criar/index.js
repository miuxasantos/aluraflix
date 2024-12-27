import Cabecalho from 'componentes/Cabecalho';
import styles from './Criar.module.css';
import Rodape from 'componentes/Rodape';
import VideoNovo from 'componentes/Form';

function NovoVideo() {
    return(
        <>
        <Cabecalho />
        <VideoNovo />
        <Rodape />
        </>
    )
}

export default NovoVideo;