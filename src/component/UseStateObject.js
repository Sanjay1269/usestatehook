import React,{useState,useEffect} from 'react'

function UseStateObject() {
    const [person, setperson] = useState({
        firstName: 'Guru',
        lastName: 'K'
    })
    const updateFirstName = () => {
        console.log('first name : ', person.firstName);
        console.log('last name : ', person.lastName);

       const personCopy = { ...person }
        personCopy.firstName = 'Ajit'
        setperson(personCopy)
    }

    useEffect(() => {
        console.log('person is changed');
       
    }, [person])
    return (
        <div>
            <p>Full Name :{person.firstName} {person.lastName}</p>
            <button onClick={updateFirstName}>Update First name</button>
        </div>
    )
}

export default UseStateObject
