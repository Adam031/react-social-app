import {connect} from "react-redux";
import {Users} from "./Users";
import {setFollowStatus, getUsers, onPaginationClick, toggleFollow} from "../../redux/usersReducer";
import React from "react";
import {Preloader} from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pagination.currentPage, this.props.pagination.pageSize)
    }

    onPaginationClick = (page) => {
        this.props.onPaginationClick(page, this.props.pagination.pageSize)
    }

    toggleFollow = (userId, isFollowed) => {
        this.props.toggleFollow(userId, isFollowed)
    }

    render() {
        return (this.props.isLoading ? <Preloader/> :
            <Users {...this.props} onPaginationClick={this.onPaginationClick} toggleFollow={this.toggleFollow}/>);
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagination: state.usersPage.pagination,
        isLoading: state.usersPage.isLoading
    }
}

export default connect(mapStateToProps, {
    setFollowStatus,
    getUsers,
    onPaginationClick,
    toggleFollow
})(UsersContainer);