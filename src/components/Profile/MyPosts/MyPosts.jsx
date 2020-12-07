import React from 'react';
import { addPostActionCreate, updatePostTextActionCreate } from '../../../State/ReducePost';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
//    debugger;
    let posts = props.posts.map(p =>
        <Post message={p.message} countLikes={p.countLikes} />)

    let addPost = () => {
        props.addPost();
    }

    let newPostText = React.createRef();

    let updatePostText = () => {
        props.updatePostText(newPostText.current.value)
    }

    return (
        <div className={s.postsBlock}>
            <textarea ref={newPostText} onChange={updatePostText} value={props.valueTextAreaPost} />
            <button onClick={addPost}>Отправить</button>
            <div className={s.posts}>
                {posts}
            </div>
        </div>

    )
}

export default MyPosts;