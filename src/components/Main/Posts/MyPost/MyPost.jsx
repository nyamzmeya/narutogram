import s from './MyPost.module.css';
import React from 'react';

const MyPost = (props) => {
    return (
        <div className= {s.mypost}>
            <div>{props.post}</div>
            <div>likes {props.likes}</div>
        </div>
    );
}

export default MyPost;