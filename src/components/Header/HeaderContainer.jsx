import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthData} from "../../redux/authReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.auth().then(data => {
            this.props.setAuthData(data.data);
        });
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authData: state.auth
    }
}

export default connect(mapStateToProps, {setAuthData})(HeaderContainer);