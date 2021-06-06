import React,{useState} from 'react';
//import ReactDOM from 'react-dom';
import './Regform.css';
function Regform(){
    const[user,setUser]=useState({
        name:"",email:"",phone:"",password:"",confirmpassword:""
    });
    let name,value;
    const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }
    const POSTDATA= async(e)=>{
    e.preventDefault();
    const{ name,email,phone,password,confirmpassword}=user;
    const res =await fetch('',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name,email,phone,password,confirmpassword
        })
    });
    const resdata=await res.json();
    return resdata;
    }
return (
<div className='div'>
    
    <h1 className="primary">SIGN UP FORM</h1><br/><br />
    <form method="POST" className='regform'>
      <b> Name:</b>  <input type="text" placeholder="Enter the name"  name="name" id="name" 
      pattern="[A-Za-z]{5}" value={user.name} onChange={handleInputs} autoComplete="off"/><br/><br/>
       <b> Phone: </b> <input type="number" placeholder="Enter the number"  name="phone" id="phone"
       required pattern="[7-9]{1}[0-9]{9}"  value={user.phone} onChange={handleInputs} /><br/><br/>
        <b>Email: </b> <input type="email" placeholder="Enter the email"  name="email" id="email" 
         pattern=".+@gmail.com" value={user.email} onChange={handleInputs} /><br/><br/>
        <b>Password: </b> <input type="password" placeholder="Enter the password"  name="password" id="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={user.password} onChange={handleInputs} /><br/><br/>
       <b> ConfirmPassword:</b>  <input type="password" placeholder="Enter the confirmpassword"  name="confirmpassword" 
         pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" id="confirmpassword" value={user.confirmpassword} onChange={handleInputs} /><br/><br/>
       <b> Storage Medium:  </b><select name="datastorage" id="datastorage">
               
 <option value="Database">Database</option>
               
 <option value="Localfile">Localfile</option>
          
  </select><br /><br />
  <input type="submit" value="Submit" onClick={POSTDATA} name="submit" id="submit"></input>
        
    </form>
</div>
)
}
export default Regform;