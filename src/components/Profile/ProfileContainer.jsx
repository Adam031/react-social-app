import {connect} from "react-redux";
import React from 'react';
import Profile from "./Profile";
import {getProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import {Navigate, useParams} from "react-router-dom";
import {compose} from "redux";

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match={match}/>
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authedUser
            if (!userId) {
                return <Navigate to="/login" />
            }
        }

        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} getStatus={this.props.getStatus} updateStatus={this.props.updateStatus} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authedUser: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer)