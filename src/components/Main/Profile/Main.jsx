import s from './Main.module.css';
import React from 'react';
import Description from './Description';
import PostsContainer from '../Posts/Posts/PostsContainer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getStatus, updateStatus} from '../../../redux/profile-reducer';
import ProfileStatusWithHooks from './StatusWithHooks';


class MainComponent extends React.Component {

    componentDidMount() {
        let userId = this.props.authorisedUserId;
        if (!userId) {
            this.props.history.push('/auth');
        }
        this.props.getStatus(userId);
    }


    render() {
        return <div className= {s.profile}>
            <Description description= {this.props.description} saveAvatar= {this.props.saveAvatar}/>
            <ProfileStatusWithHooks status= {this.props.status} updateStatus= {this.props.updateStatus}/>
            <PostsContainer />
        </div>
    };
}


let mapStateToProps = (state) => {
    return {
      description: state.profilePage.description,
      status: state.profilePage.status,
      authorisedUserId: state.auth.userId,
      isAuth: state.auth.isAuth
    }
};


let Main = compose(connect(mapStateToProps, {getStatus, updateStatus}), withAuthRedirect)(MainComponent);

export default Main;