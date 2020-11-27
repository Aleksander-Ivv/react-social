import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


function Dialogs(props) {

    let dialogs = props.stateDialogs.dialogs.map(d => 
        <DialogItem name={d.name} id={d.id} />)

    let messages = props.stateDialogs.messages.map(m => 
        <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogs }
            </div>
            <div className={s.messages}>
                { messages }
            </div>
        </div>
    )
}

export default Dialogs;