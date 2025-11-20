import logo from "../../images/logo.svg";
import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} className="logo" alt="logo" />
            <ul className={styles.menu}>
                <li className={styles.item}>
                    <a href="#s">Main</a>
                </li>
                <li className={styles.item}>
                    <a href="#s">Messages</a>
                </li>
                <li className={styles.item}>
                    <a href="#s">Help</a>
                </li>
            </ul>
        </header>
    )
}

export default Header;