import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const Name = (props) => {
    let path = '/dialogs/' + props.id;
    return (
    <div className= {s.name}>
        <NavLink to= {path}>{props.name}</NavLink>
    </div>
    );
}


export default Name