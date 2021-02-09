import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css'

const User = (props) => {
    return (
        <div className={s.container}>
            <div className={s.item1}>
                <NavLink to= {`/user/` + props.userId}>
                    <img src= 'https://images6.fanpop.com/image/photos/37400000/Naruto-Hinata-unohana-the-fanpop-user-37453826-500-484.jpg'/>
                    </NavLink>
                <div>
                    {props.followcheck
                    ? <button disabled= {props.followingUsers.some(userId => userId === props.userId)}  onClick= {() => {
                        props.unfollow(props.userId)
                    }}>Unfollow</button>
                    : <button disabled= {props.followingUsers.some(userId => userId === props.userId)} onClick= {() => {
                        props.follow(props.userId)
                        }}>Follow</button>}
                </div>
                </div>
            <div className= {s.item2}>
                <div>{props.name}</div>
                <div>{props.status}</div>
                </div>
        </div>
    );
}

export default User;