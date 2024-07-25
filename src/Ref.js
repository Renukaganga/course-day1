import React, {  useState } from 'react';

function Ref(props) {
    
    const [collegeid,setCollegeid]=useState('')
    const [password,setPassword]=useState('')
    const [logged,setLogged]=useState(false)
    
    const handleSubmit=(event)=>{
             event.preventDefault();
             console.log(collegeid);
             console.log(password);
             if(password === 'renuka' && collegeid === '1231' )
                setLogged(true)
              else
                setLogged(false)
                
             
             
             
             
    }
    const handleChange=(event)=>{
        setCollegeid(event.target.value)
        console.log(collegeid);
    }
    const handleChange1=(event)=>{
        setPassword(event.target.value)
        console.log(password);
    }
    return (
        <div style={{padding:'40px'}}>
            <div className='card' style={{width:'400px', height:'300px'}}> 
            <div className='card-body'>
                <div className='card-title' style={{color:'blue',fontFamily:'serif'}}>Login</div>
            <form onSubmit={handleSubmit}>
           <label>College ID
           <input type="text"  placeholder='Enter College ID' value={collegeid} onChange={handleChange}/></label><br></br>
           <label>Password
           <input type="text"  placeholder='Enter password' value={password} onChange={handleChange1}/></label><br></br>
           <button type="submit" style={{borderRadius:'10px',backgroundColor:'lavender'}}>Submit</button> 
           <br></br>
           {logged && <h1>Logged successfully</h1>}
           </form>
           </div>
        </div>
        </div>
    );
}

export default Ref;