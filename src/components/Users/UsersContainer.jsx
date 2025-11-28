import {connect} from "react-redux";
import {Users} from "./Users";
import {
    setLoading,
    setCurrentPage,
    setTotalCountUsers,
    setUsers,
    setFollowStatus
} from "../../redux/usersReducer";
import React from "react";
import {Preloader} from "../common/Preloader/Preloader";
import {followAPI, usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setLoading(true);
        usersAPI.getUsers(this.props.pagination.currentPage, this.props.pagination.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalCountUsers(data.totalCount)
            this.props.setLoading(false)
        });
    }

    onPaginationClick = (page) => {
        this.props.setCurrentPage(page);
        this.props.setLoading(true)
        usersAPI.getUsers(page, this.props.pagination.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setLoading(false)
        });
    }

    toggleFollow = (userId, isFollowed) => {
        if (isFollowed) {
            followAPI.unfollow(userId).then(status => {
                if (status === 200) {
                    this.props.setFollowStatus(false, userId)
                }
            });
        } else {
            followAPI.follow(userId).then(status => {
                if (status === 200) {
                    this.props.setFollowStatus(true, userId)
                }
            });
        }
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
    setUsers,
    setCurrentPage,
    setTotalCountUsers,
    setLoading,
    setFollowStatus
})(UsersContainer);