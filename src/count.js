import React, { useState,useEffect } from 'react';
import axios from "axios";


const Count = () => {
    const [persons, setPersons] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/api/user')
            .then(res=>{
                console.log(res)
                setPersons(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])




    return (
<div>
<ul>
    { persons.map(person=>(
        <li key={person._id}>{person.username}</li>
    ))}
</ul>
</div>




    );
};

export default Count;