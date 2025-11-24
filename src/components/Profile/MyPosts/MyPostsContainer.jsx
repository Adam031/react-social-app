import {connect} from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)