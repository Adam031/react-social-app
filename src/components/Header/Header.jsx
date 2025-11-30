import logo from "../../images/logo.svg";
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
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
            </div>
            <div className={styles.login}>
                {props.authData.isLogin ? (
                    <>
                        {props.authData.login} -
                        <button onClick={props.logout}>Log out</button>
                    </>
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )}
            </div>
        </header>
    )
}

export default Header;