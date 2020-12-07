import { connect } from 'react-redux';
import { addMessageCreate, updateTextMessageCreate } from '../../State/ReduceDialogs';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        stateDialogs: state.DialogPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageCreate()),
        updateTextMessage: (text) => dispatch(updateTextMessageCreate(text))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;