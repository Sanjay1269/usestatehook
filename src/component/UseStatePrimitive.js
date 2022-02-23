import react from 'react';
import React,{useState, useEffect} from 'react'

function UseStatePrimitive() {
    const [userName, setuserName] = useState('')
    const [count, setcount] = useState(0)

    const updateName = () => {
        console.log('update name function called');
        setuserName('Guru')
    }

   const  updateCount =() => {
        console.log('update count function called');
        setcount(count+5)
    }
    useEffect(() => {
        if(count !== 0){
            console.log('count is changed');
        }
    }, [count])

    useEffect(() => {
        if(userName !== ""){
            console.log('username is changed');
        }
    }, [userName])
    return (
        <div>
            {console.log('useStatePrimitive return executed')}
            <p>User name - {userName}</p>
            <button onClick={updateName}>Update Name</button>
            <p>Count - {count}</p>
            <button onClick={updateCount}>Update Count</button>
        </div>
    )
}
/* make functional components as pur components */

export default react.memo(UseStatePrimitive)
