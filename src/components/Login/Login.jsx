import styles from './Login.module.css';
import {reduxForm} from "redux-form";
import {LoginForm} from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";

const LoginReduxForm = reduxForm({form: "LoginForm"})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe);
    }

    if (props.isLogin) return <Navigate to={"/profile"} />

    return (
        <div className={styles.login}>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin
    }
}

export default connect(mapStateToProps, {login})(Login)