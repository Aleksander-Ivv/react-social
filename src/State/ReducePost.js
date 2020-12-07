const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';

let initialState = {
    posts: [
        { id: 1, message: 'Привет, как твои дела?', countLikes: 14 },
        { id: 2, message: 'Всем привет!', countLikes: 0 }
      ],
      valueTextAreaPost: ''
}
const ReducePost = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.valueTextAreaPost,
                countLikes: 0
            }
            return {
              ...state,
              posts: [...state.posts, newPost],
              valueTextAreaPost: ''
            };
        case UPDATE_TEXT_POST: {
            return {
              ...state,
              valueTextAreaPost: action.textPost
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreate = () => {
    return {
      type: ADD_POST
    }
  }
  export const updatePostTextActionCreate = (newText) => {
    return {
      type: UPDATE_TEXT_POST,
      textPost: newText
    }
  }

export default ReducePost;