import React, { useState } from "react";
import swal from "sweetalert";
import { useNavigate,useLocation } from 'react-router-dom';
const { v4: uuidv4 } = require('uuid');
const EditContact=(props)=>{
    const location=useLocation();
    const{id,name,email}=location.state;
const[Contact,setContact]=useState({
    id:id,
    name:name,
    email:email,
});
let navigate=useNavigate();
const update=(e)=>{
e.preventDefault();
if(Contact.name==="" || Contact.email==="")
{
    swal(`Please Add Your name and email`);
    return;
}
else
{
swal(`Your Data Has Been Added Succesfully`);
props.UpdateChangeHandler(Contact);
setContact({name:"",email:""});
navigate("/");
}
}
const changeHandler = e => {
    setContact({...Contact,[e.target.name]: e.target.value})
 }
    return(
        <div className="ui main" style={{marginTop:"50px"}}>
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={update}>
        <div>
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter name"
            value={Contact.name}
            onChange={changeHandler}
            />
        </div>
        <div>
            <label>Email</label>
            <input type="text" name="email" placeholder="Enter email"
            value={Contact.email}
            onChange={changeHandler}
            />
        </div>
     
        <button className="ui button blue">Update</button>
    
        </form>

        </div>
       
    );
};
export default EditContact;