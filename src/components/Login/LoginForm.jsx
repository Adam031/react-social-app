import {Field} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import styles from "../common/FormControls/FormControls.module.css"

export const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"login"} component={Input} placeholder={"Login"} validate={[required]} type={"email"} />
            <Field name={"password"} component={Input} placeholder={"Password"} validate={[required]} type="password" />
            <div className="checkbox-box">
                <Field name={"rememberMe"} type={"checkbox"} component={"input"} />
                Remember me
            </div>
            {props.error && <div className={styles.errorBox}>{props.error}</div>}
            <button>Submit</button>
        </form>
    )
}