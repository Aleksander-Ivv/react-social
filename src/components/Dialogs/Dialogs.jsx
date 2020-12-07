import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


function Dialogs(props) {
//    debugger;
    let dialogs = props.stateDialogs.dialogs.map(d => 
        <DialogItem name={d.name} id={d.id} />)

    let messages = props.stateDialogs.messages.map(m => 
        <Message message={m.message} />)
    
    let messageNew = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onChangeMessage = () => {
    //    let valueMessage = messageNew.current.value;
        props.updateTextMessage(messageNew.current.value);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogs }
            </div>
            <div className={s.messages}>
                { messages }
                <div className={s.inputMessage}>
                    <textarea onChange={onChangeMessage} 
                              ref={messageNew} 
                              value={props.stateDialogs.valueMessage}/>
                    <button onClick={addMessage}>Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;