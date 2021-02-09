import { connect } from "react-redux";
import { getUser } from "../../../../redux/user-reducer";
import UserDescription from "./UserDescription";
import s from './UserDescription.module.css'
import React from 'react';
import Loading from "../../../../common/Loading";
import { withRouter } from "react-router-dom";


let mapStateToProps = (state) => {
    return {
        user: state.userPage.user
    }
};


class UserComponent extends React.Component {
    
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUser(userId);
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            let userId = this.props.match.params.userId;
            this.props.getUser(userId);
        }
    }


    
    render() {
        
        return <div className= {s.user}>
            {this.props.isFetching ? <Loading /> : null}
            <UserDescription description= {this.props.user}/>
            </div>
                
        }
    }
    



let withUrlUserComponent = withRouter(UserComponent);



let UserContainer = connect(mapStateToProps, {getUser}) (withUrlUserComponent);



export default UserContainer;