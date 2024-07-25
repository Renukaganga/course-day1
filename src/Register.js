import { useState } from "react";
function Register() {
    const[college,setCollege] = useState('')
    const[password,setPassword] = useState('')
    const[email,setEmail] = useState('')
    const[branch,setBranch] = useState('')
    const[year,setYear] = useState('')
    const[gender,setGender] = useState('')
    
     const handleCollege=(e)=>{
        setCollege(e.target.value)
    }

    
        
        const submitData=(event)=>{
            event.preventDefault();
            const obj={
                college,password,email,branch,year,gender
            }
            console.log(obj)
        }
        

    const handleBranch=(e)=>{
        setBranch(e.target.value)
        console.log(e)
        
    }

    const handleYear=(e)=>{
        setYear(e.target.value)
        console.log(e)
    }
    const HandleGender=(e)=>{
        setGender(e.target.value)
        console.log(e.target.value)
    }

    
    return (
        <>
        <div className="card">
            <form onSubmit={submitData} required>
                <label>
                    <p>College Id</p>
                    <input type="text"  value={college} onChange={handleCollege} />
                  

                </label><br></br>
                <label>
                    <p>password</p>
                    <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
                   
                </label><br></br>
                <label>
                    <p>email</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label><br></br>
                
                <label>
                    <p>branch</p>
                <select value={branch} onChange={handleBranch}>
                    <option>selectbranch</option>
                    <option>it</option>
                    <option>cse</option>
                    <option>eee</option>
                </select>
                </label><br></br>


                <label>
                    <p>year</p>
                <select value={year} onChange={handleYear}>
                    <option>First</option>
                    <option>second</option>
                    <option>Third</option>
                    <option>forth</option>
                </select>
                </label>
                <label>
                    <p>gender</p>
                <div style={{display:"flex"}}>
                    <input type="radio"  checked={gender === "Female"} value="female"  onChange={HandleGender}></input>Female
                    <input type="radio" value="male" checked={gender === "male"} onChange={HandleGender}></input>male
                    <input type="radio" value="others" checked={gender=== "others"} onChange={HandleGender}></input>others
                </div>
                </label>
                <br></br>
                

                <button type="submit">Submit</button>
            </form>
            </div>
        </>
    );
}
export default Register