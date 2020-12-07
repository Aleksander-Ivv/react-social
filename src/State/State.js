import ReduceDialogs from "./ReduceDialogs";
import ReducePost from "./ReducePost";

let store = {
  _subscriber() {
    console.log('render');
  },
  subscribe(observer) {
    this._subscriber = observer;
  },
  getState() {
    return this._state;
  },
  _state: {
    DialogPage: {
      dialogs: [
        { id: 1, name: 'Sasha' },
        { id: 2, name: 'Masha' },
        { id: 3, name: 'Natasha' }
      ],
      messages: [
        { id: 1, message: 'Привет' },
        { id: 2, message: 'Второе сообщение' },
        { id: 3, message: 'Как твои дела' },
        { id: 4, message: 'Новое сообщение' }
      ],
      valueMessage: ''
    },
    ProfilePage: {
      posts: [
        { id: 1, message: 'Привет, как твои дела?', countLikes: 14 },
        { id: 2, message: 'Всем привет!', countLikes: 0 }
      ],
      valueTextAreaPost: ''
    }
  },

  dispatch(action) {

    this._state.ProfilePage = ReducePost(this._state.ProfilePage, action);
    this._state.DialogPage = ReduceDialogs(this._state.DialogPage. action);
    this._subscriber(this._state);
  }

}

export default store;
