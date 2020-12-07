import Users from './Users';
import { connect } from 'react-redux';
import { setFollowAC, setUnFollowAC } from '../../State/ReduceUsers';

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followSet: (idUser) => dispatch(setFollowAC(idUser)),
        unfollowSet: (idUser) => dispatch(setUnFollowAC(idUser))
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer