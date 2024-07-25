import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'


const DataFetching = () => {
    const [data,setData]=useState([])
    const fetchData=()=>{
        axios.get('https://fakestoreapi.com/users').then((response)=>{
            console.log(response)
            setData(response.data)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])
    return (
        <div className='Tab'>
           <table>
            <thead>
           <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Mail</th>
            <th>Username</th>
           
            <th>Password</th>
            <th>Phone number</th>
            <th>Company Name</th>
        </tr>
        </thead>
        <tbody className='c1' >
        {data.map((val) => {
                    return (
                        <tr key={val.id}>
                            <td>{val.id}</td>
                          
                            <td>{val.email}</td>
                            <td>{val.username}</td>
                            <td>{val.phone}</td>

                        </tr>
                    )
                })}
                </tbody>
       
        </table> 
        </div>
    );
};

export default DataFetching;