import React, { useState,useEffect } from 'react'

function UseStateArray() {
    const [hobbies, sethobbies] = useState([])

    const addHobbies = () => {

        /*
        first way
         sethobbies([...hobbies,'cricket']) 
         */

        /*
        second way
          const hobbiesCopy = hobbies.slice(0)
         hobbiesCopy.push('cricket')
         sethobbies(hobbiesCopy) */

        /* 3rd way */
        const hobbiesCopy = [...hobbies]
        hobbiesCopy.push('cricket')
        sethobbies(hobbiesCopy)

    }
    useEffect(() => {
        console.log('hobbies is changed');

    }, [hobbies])
    return (
        <div>
            {hobbies.map((hobby,index) => {
                return <p key={index}>{hobby}</p>
            })}
            <button onClick={addHobbies}>add</button>

        </div>
    )
}

export default UseStateArray
