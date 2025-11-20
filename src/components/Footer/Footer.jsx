import logo from "../../images/logo.svg";
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={logo} className="logo" alt="logo" />
            <p className={styles.copyright}>react learning by Sergei</p>
        </footer>
    )
}

export default Footer;