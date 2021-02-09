import { useState } from 'react';
import s from './Users.module.css'

const Paginator = (props) => {



    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);}

    let [portionNumber, changePortion] = useState(1);

    let portionsNumber = Math.ceil(pagesCount / 10);

    let leftNumber = (portionNumber - 1) * 10 + 1;

    let rightNumber = portionNumber * 10;

    let pagesEl = pages
    .filter(p =>p >= leftNumber &&  p<= rightNumber)
    .map(p => {
        return <span className= {props.currentPage === p && s.selectedPage}
        onClick= {(e) => {props.onPageChange(p); }}>{p}</span>
    });



    return <div>
        {portionNumber > 1 && 
        <button onClick= {() => changePortion(portionNumber - 1)}>&laquo;</button>}
        {pagesEl}
        {portionNumber != portionsNumber && 
        <button onClick= {() => changePortion(portionNumber + 1)}>&raquo;</button>}
    </div>
    
}

export default Paginator;