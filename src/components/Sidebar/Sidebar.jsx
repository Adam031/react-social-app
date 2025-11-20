import styles from "./Sidebar.module.css"

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <ul>
                <li className={styles.active}><a href="#s">Portfolio</a></li>
                <li><a href="#s">Messages</a></li>
                <li><a href="#s">News</a></li>
                <li><a href="#s">Music</a></li>
            </ul>
        </div>
    )
}

export default Sidebar;