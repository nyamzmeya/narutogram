import s from './Menu.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from '../friends/Friends';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { connect } from 'react-redux';

const MenuComponent = (props) => {

    return (
        <div className= {s.menu}>
            <div className= {s.item}>
                <NavLink to= '/main' activeClassName= {s.active}>Profile</NavLink>
                </div>
            <div className= {s.item}>
                <NavLink to= '/dialogs' activeClassName= {s.active}>Messages</NavLink>
                </div>
            <div className= {s.item}>
                <NavLink to= '/news' activeClassName= {s.active}>News</NavLink>
                </div>
            <div className= {s.item}>
                <NavLink to= '/music' activeClassName= {s.active}>Music</NavLink>
                </div>
            <div className= {s.item}>
                <NavLink to= '/settings' activeClassName= {s.active}>Settings</NavLink>
                </div>
            <div className= {s.item}>
                <NavLink to= '/search' activeClassName= {s.active}>Find users</NavLink>
                </div>
            <div className= {s.item}>
                <Friends friends= {props.friends}/>
                </div>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        friends: state.profilePage.friendsBar.friends
    }
}

let AuthRedirectComponent = withAuthRedirect(MenuComponent);

let Menu = connect(mapStateToProps) (AuthRedirectComponent);

export default Menu;

 