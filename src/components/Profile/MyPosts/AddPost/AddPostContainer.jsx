import {addPost} from "../../../../redux/profileReducer";
import {AddPost} from "./AddPost";
import {connect} from "react-redux";

export default connect(() => ({}), {addPost})(AddPost)