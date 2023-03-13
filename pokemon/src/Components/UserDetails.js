import React, { useContext } from 'react'
import { myContext } from '../App';

const UserDetails = () => {
    const data = useContext(myContext);
    return <div className='name'>My Name is: {data.name}</div>;
}

export default UserDetails;