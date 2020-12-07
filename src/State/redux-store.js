import ReducePost from './ReducePost';
import ReduceDialogs from './ReduceDialogs';
import ReduceUser from './ReduceUsers';

const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
    ProfilePage: ReducePost,
    DialogPage: ReduceDialogs,
    UsersPage: ReduceUser
})

let store = createStore(reducers);

export default store;
