const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

let initialState = {
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
}
const ReduceDialogs = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.valueMessage
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
        valueMessage: ''
      };
    case UPDATE_TEXT_MESSAGE: 
      return {
        ...state,
        valueMessage: action.textMessage
      };
    default:
      return state;
  }
}
export const addMessageCreate = () => {
  return { type: ADD_MESSAGE }
}
export const updateTextMessageCreate = (newText) => {
  return {
    type: UPDATE_TEXT_MESSAGE,
    textMessage: newText
  }
}
export default ReduceDialogs  