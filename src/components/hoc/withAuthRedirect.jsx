import { Redirect } from "react-router-dom"
import React from 'react';
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
      isAuth: state.auth.isAuth
    }
};

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render () {
            if (!this.props.isAuth) return <Redirect to= '/auth'/>

            return <Component {...this.props}/>
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToProps) (RedirectComponent);

    return ConnectedRedirectComponent;
}