import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {

    let posts = props.posts.map(p => 
        <Post message={p.message} countLikes = {p.countLikes} />)

    let addPost = () => alert(newPostText.current.value)

    let newPostText = React.createRef();
         

    return (
    <div className={s.postsBlock}>
        <textarea ref={newPostText}></textarea>
        <button onClick={ addPost }>Отправить</button>
        <div className={s.posts}>
            { posts }
        </div>
    </div>

    )
}

export default MyPosts;