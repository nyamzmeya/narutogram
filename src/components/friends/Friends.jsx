import Friend from './Friend';
import s from './Friends.module.css'

const Friends = (props) => {
    
    let FriendEl = props.friends.map(p => <Friend image= {p.image} name= {p.name}/>)
    return (
        <>
        <div className= {s.friends}>Friends</div>
        <div className = {s.gridContainer}>
            {FriendEl}
            </div>
        </>
    );
}

export default Friends