import styles from './Dialog.module.css';
import {NavLink} from "react-router-dom";

export const Dialog = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <NavLink to={path} className={styles.dialog}>
            <img src={props.avatar} alt="avatar"/>
            {props.name}
        </NavLink>
    )
}