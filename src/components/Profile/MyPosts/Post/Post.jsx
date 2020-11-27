import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.content}>
            <div class={`${s.item} ${s.active}`}>{props.message}</div>
            <div className={s.likes}>
                <img src="https://freepngimg.com/thumb/heart/67620-heart-instagram-icons-button-computer-like.png" width='50px'></img> 
                <span>Likes: {props.countLikes}</span>
            </div>
        </div>
    )
}

export default Post;