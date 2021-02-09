import s from './Friends.module.css'
const Friend = (props) => {
    return (
        <div className = {s.gridItem}>
        <img src= {props.image}/>
        <p>{props.name}</p>
        </div>
    );
}

export default Friend