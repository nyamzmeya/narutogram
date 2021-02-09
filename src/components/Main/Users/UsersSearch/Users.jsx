import Loading from '../../../../common/Loading';
import User from './User';
import s from './Users.module.css'
import Paginator from './Paginator'

const Users = (props) => {

    let userEl = props.users.map(u => 
        {return < User
            userId= {u.id}
            status= {u.status}
            name= {u.name}
            followcheck= {u.followed}
            follow= {props.follow}
            unfollow= {props.unfollow}
            followingUsers= {props.followingUsers}
        />}
        );


    return <div className= {s.users}>
        {props.isFetching ? <Loading /> : null}
        <Paginator totalUsersCount={props.totalUsersCount} 
        pageSize={props.pageSize} 
        onPageChange={props.onPageChange}
        currentPage = {props.currentPage}/>
        {userEl}
    </div>
    
}

export default Users;