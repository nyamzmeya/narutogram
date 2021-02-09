import s from './Dialogs.module.css'
import Message from './Message';
import Name from './Name';
import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { requiredField, maxLenCreator } from '../../common/validation';

import {textArea} from '../../common/formscontrols'



const maxLen10 = maxLenCreator(10);





const Dialogs  = (props) => {

    let state = props.dialogsPage;

    const peopleEl = state.people.map(p => <Name name= {p.name} id = {p.id}/>);

    let mesEl = state.people.map(p => <Message mes= {p.mes}/>)


    let mesAdd = (values) => {
        props.mesAdd(values.message)
    }
    

    
    return (
        <div className= {s.dialogs}>
            <div className= {s.names}>
                {peopleEl}
                </div>
            <div className= {s.messages}>
                {mesEl}
            </div>
            <MesReduxForm onSubmit= {mesAdd}/>
        </div>
    );
}


const MesForm = (props) => {
    return (
        <form onSubmit= {props.handleSubmit} >
            <div>
                <Field placeholder='Message' name='message' component={textArea}  validate={[requiredField, maxLen10]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const MesReduxForm = reduxForm({
    form: 'dialogs'
  })(MesForm)





export default Dialogs;

