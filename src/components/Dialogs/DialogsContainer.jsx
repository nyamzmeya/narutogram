import { connect } from 'react-redux';
import { compose } from 'redux';
import { mesAddActionCreator} from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        mesAdd: (mes) => {
            dispatch(mesAddActionCreator(mes))
        }
    }
};


let DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps), 
    withAuthRedirect)(Dialogs)


export default DialogsContainer;




