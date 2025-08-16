import styles from './DestopNav.module.scss';

export default function DestopNav() {
    return <>
        <nav className={styles.nav}>
          <a href="#a">Sekcja A</a>
          <a href="#b">Sekcja B</a>
          <a href="#c">Sekcja C</a>
        </nav>
    </>
}