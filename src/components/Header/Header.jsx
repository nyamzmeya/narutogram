import s from './Header.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className= {s.header}>
          <div className={s.welcome}>
            <div>Welcome to Narutogram</div>
            {props.isAuth 
            ? <>
            <div>{props.login}
            <button className={s.button} onClick={props.Logout}>Log out</button>
            </div> 
            </>
            :<NavLink to= {'/login'}></NavLink>}
          </div>
      </header>
    );
}

export default Header;