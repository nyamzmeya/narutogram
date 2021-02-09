import { connect } from 'react-redux';
import { postAddActionCreator } from '../../../../redux/profile-reducer';
import Posts from './Posts';



let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        postAdd: (post) => {
            dispatch(postAddActionCreator(post))
    }
}};

let PostsContainer = connect(mapStateToProps, mapDispatchToProps) (Posts);

export default PostsContainer;