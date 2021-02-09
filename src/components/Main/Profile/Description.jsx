import s from './Description.module.css';
import React from 'react';
import avatar from '../../../common/avatar.png'

const Avatar = (props) => {
    return (
        <>
            <div className= {s.avatar}>
                <img src= {props.avatar || avatar} alt="description" height='300p'/>
            </div>
            <div className= {s.info}>
            <div>Name: {props.name}</div>
            <p></p>
            <div>Age: {props.age}</div>
            <p></p>
            <div>Information: {props.info}</div>
            </div>
            </>
    );
}

const Description = (props) => {

    let descsEl = props.description.map(p => <Avatar avatar= {p.avatar} name= {p.name} 
    info= {p.info} age= {p.age} />)



    return (
        <div className= {s.desc}>
            {descsEl}
        </div>
    );

}

export default Description;