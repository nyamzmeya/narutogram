import React, { Suspense } from 'react';
import Loading from '../../common/Loading';


export const withSuspence = (Component) => {

    return (props) => {
        <React.Suspense fallback={<Loading/>}>
        <Component {...props}/>
        </React.Suspense>;
    } 
}