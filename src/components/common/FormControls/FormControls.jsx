import styles from "./FormControls.module.css"

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={styles.formField + " " +(meta.touched && meta.error ? styles.error : '')}>
            <textarea {...input} {...props}></textarea>
            <span>{meta.error}</span>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    return (
        <div className={styles.formField + " " +(meta.touched && meta.error ? styles.error : '')}>
            <input {...input} {...props}></input>
            <span>{meta.error}</span>
        </div>
    )
}