import logo from "../../images/logo.svg";
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} className="logo" alt="logo" />
            <ul className={styles.menu}>
                <li className={styles.item}>
                    <NavLink to="/profile">Main</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/dialogs/*">Messages</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/settings">Settings</NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header;