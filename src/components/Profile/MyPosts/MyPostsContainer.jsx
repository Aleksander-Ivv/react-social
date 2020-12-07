import MyPosts from './MyPosts';
import { addPostActionCreate, updatePostTextActionCreate } from '../../../State/ReducePost';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.ProfilePage.posts,
        valueTextAreaPost: state.ProfilePage.valueTextAreaPost
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreate());
        },
        updatePostText: (text) => {
            dispatch(updatePostTextActionCreate(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;