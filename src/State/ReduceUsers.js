const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';

let InitialState = {
    users: [
        { id: 1, fotoAvatar: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg', firstName: 'Саша', follow: false, location: { country: 'Россия', city: 'Воронеж' } },
        { id: 2, fotoAvatar: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg', firstName: 'Наташа', follow: true, location: { country: 'Россия', city: 'Анапа' } },
        { id: 3, fotoAvatar: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg', firstName: 'Дима', follow: false, location: { country: 'Россия', city: 'Москва' } },
    ]
}
const ReduceUsers = (state = InitialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: [...state.users].map((u) => {
                    if (u.id === action.userId) {
                        return {...u, follow: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: [...state.users].map( (u) => {
                    if (u.id === action.userId) {
                        return {...u, follow: false}
                    }
                    return u;
                })
            }
        default:
            return state;
    }

}

export const setFollowAC = (userId) => {
//debugger;
    return {
        type: FOLLOW_USER,
        userId: userId
    }
}

export const setUnFollowAC = (userId) => {
    return {
        type: UNFOLLOW_USER,
        userId: userId
    }
}

export default ReduceUsers;