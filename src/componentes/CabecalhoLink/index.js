import { Link, useLocation } from 'react-router-dom';
import styles from './CabecalhoLink.module.css';

function CabecalhoLink({ to, children }) {
    const location = useLocation();

    return (
        
        <Link to={to} className={location.pathname === to ? styles.linkAtivo : styles.link}>
            {children}
        </Link>
    )
}

export default CabecalhoLink;