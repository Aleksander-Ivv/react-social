import s from './Users.module.css';

const Users = (props) => {
    //debugger;
    return (
        <div>
            { props.users.users.map(u => <div key={u.id}>
                <span>
                    <div className={s.avatars}><img src={u.fotoAvatar}></img></div>
                    <div>
                        {u.follow
                            ? <button onClick={() => { props.unfollowSet(u.id) }}> FOLLOW </button>
                            : <button onClick={() => { props.followSet(u.id) }}> UNFOLLOW </button>}
                    </div>
                </span>
                <span>
                    <div>{u.firstName}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </div>)}

        </div>
    )
}

export default Users