import styles from './ProfileStatus.module.css';
import React, {useEffect, useState} from 'react'

export const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [statusValue, setStatusValue] = useState(props.status);

    useEffect(() => {
        setStatusValue(props.status)
    }, [props.status])

    const updateStatusValue = (e) => {
        setStatusValue(e.target.value)
    }

    const activeEditMode = () => {
        setEditMode(!editMode);
    }

    const exitEditMode = () => {
        setEditMode(!editMode);
        props.updateStatus(statusValue);
    }

    return (
        <div className={styles.profileStatus}>
            {editMode ?
                <input type="text" value={statusValue} className={styles.statusInput}
                       onBlur={exitEditMode} onInput={updateStatusValue} autoFocus={true}/>
                :
                <p className={styles.statusText}
                   onDoubleClick={activeEditMode}>{statusValue || "No status"}</p>
            }
        </div>
    )
}