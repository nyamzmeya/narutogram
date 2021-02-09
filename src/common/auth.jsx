import s from './common.module.css'
import {Input, createField} from './formscontrols'
import {reduxForm } from 'redux-form'
import { requiredField } from './validation'
import { connect } from 'react-redux'
import {Logout, Login} from '../redux/auth-reducer'
import { Redirect } from 'react-router-dom'

const LoginForm = ({handleSubmit,error}) => {
    return (
        <form onSubmit= {handleSubmit}>
                {createField('Email', 'email', Input, [requiredField])}
                {createField('Password', 'password', Input, [requiredField], {type:'password'})}
                {createField(null, 'rememberMe', Input, [], {type:'checkbox'}, 'remember me')}    
            <div >
                <button>Login</button>
            </div>
            {error && <div className={s.auth_error}>
                {error}
            </div>}
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
  })(LoginForm)

const AuthPage = (props) => {

    const onSubmit = (formData) => {
        props.Login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to= {'/main'}/>
    }
    return (
    <div className={s.auth}>
        <LoginReduxForm onSubmit= {onSubmit}/>
    </div>
    );
}

const mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
}

export default connect(mapStateToProps, {Login, Logout})(AuthPage);