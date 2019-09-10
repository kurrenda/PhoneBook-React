import React from 'react';
import Results from "../containers/Results";


const Result = ({user}) => {
    return(
    <div>
    <li>
        <span>{user.firstname}{" "}</span>
        <span>{user.surname}{" "}</span>
    </li>
    </div>
)};


export default Result;