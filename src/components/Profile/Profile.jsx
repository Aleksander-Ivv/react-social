import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
    return (
    <div className={s.content}>
        <ProfileInfo />
        <MyPosts posts={props.stateProfile.posts} />
    </div>

    )
}

export default Profile;