import React, { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';
const { v4: uuidv4 } = require('uuid');

const AddContact=(props)=>{
const[Contact,setContact]=useState({
    id:"",
    name:"",
    email:""
});
let navigate=useNavigate();
const add=(e)=>{
e.preventDefault();
if(Contact.name==="" || Contact.email==="")
{
    swal(`Please Add Your name and email`);
    return;
}
else
{
swal(`Your Data Has Been Added Succesfully`);
setContact(Contact.id=uuidv4());
props.AddChangeHandler(Contact);
setContact({name:"",email:""});
navigate("/");
}
}
const changeHandler = e => {
    setContact({...Contact,[e.target.name]: e.target.value})
 }
    return(
        <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={add}>
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
     
        <button className="ui button blue">Add Contact</button>
    
        </form>

        </div>
       
    );
};
export default AddContact;