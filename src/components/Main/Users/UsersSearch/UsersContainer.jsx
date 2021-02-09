import { connect } from "react-redux";
import { setCurrentPage, setTotalUsersCount, unfollowUser, getUsers, followUser} from "../../../../redux/users-reducer";
import {requestUsers, requestPageSize, requestTotalUsersCount, requestCurrentPage, requestFollowingUsers} from "../../../../redux/users-selectors";
import React from 'react';
import Users from "./Users";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        users: requestUsers(state),
        pageSize: requestPageSize(state),
        totalUsersCount: requestTotalUsersCount(state),
        currentPage: requestCurrentPage(state),
        followingUsers: requestFollowingUsers(state)

    }
};



class UsersComponent extends React.Component {


    componentDidMount() {
        
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        
    }
        

    onPageChange = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize);
        this.props.setCurrentPage(currentPage);
    }


    render() {

        return <Users 
            users = {this.props.users}
            totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            follow= {this.props.followUser}
            unfollow= {this.props.unfollowUser}
            onPageChange= {this.onPageChange}
            followingUsers= {this.props.followingUsers}
            />    
        }
            
};



let UsersContainer = compose(connect(mapStateToProps,
    {setCurrentPage, setTotalUsersCount, getUsers, followUser, unfollowUser}), 
    withAuthRedirect)(UsersComponent);
export default UsersContainer;