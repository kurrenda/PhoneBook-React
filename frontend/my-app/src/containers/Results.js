import React from 'react';
import Result from '../components/Result'


const Results =  ({users}) => {
    return (
        <ul>
            {users.map(j => {
                return <Result user={j} key={j.id}/>
            })}

        </ul>
    )
};

export default Results;