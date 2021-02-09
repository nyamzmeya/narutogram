import s from './UserDescription.module.css'
import React from 'react';

import avatar from '../../../../common/avatar.png'

const UserDescription = (props) => {

    let state = props.description;
    console.log(props);
    return (
        <div className= {s.desc}>
            <div className= {s.avatar}>
                <img src= {avatar || state.photos.large} alt="description" height='300p'/>
            </div>
            <div className= {s.info}>
            <div>Name: {state.fullName}</div>
            <p></p>
            <div>Information: {state.aboutMe}</div>
            <p></p>
            </div>
        </div>
    );

}

export default UserDescription;