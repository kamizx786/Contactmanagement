import React, { useEffect } from 'react'
import Me from "../images/blank-profile-picture-973460__340.webp"
import {Link,useNavigate} from "react-router-dom"
import { useRef } from 'react'
import "./style.css";
const Contactlists = (props) => {
const Contact =props.Contact;
const SearchElem=useRef("");
//Styling
const mystyle={
border:"1px",
borderRadius:"10px 10px",
backgroundColor:"#E1DEEA",
marginBottom:"10px",
};

const GetSearchTerm=()=>{
  props.SearchKeyword(SearchElem.current.value);
}
const Deleteitem=(ID)=>{
props.deletehandler(ID);
}

  return (
    < div className="row">
 <div className='ui called list container-con col-12' style={{marginTop:"50px"}}> 
<div className='row'>
<div className='col-6'>
<h2>Contact List</h2>
</div>
<div className='col-6' style={{marginBottom:"20px"}}>
<Link to="/add">
<button className='ui button blue right'>Add Contact</button>
</Link>
</div>
</div>

<div className='ui search row'>
<div className='ui icon input col-8'>
<input ref={SearchElem}
 type="text" placeholder='Search Contacts' className='prompt'
value={props.Term}
onChange={GetSearchTerm}
/>

</div>
</div>
<h4>
{Contact.length<1? "No result Found": ""}
</h4>
 {
  Contact.map((curlElem)=>{
return(
<div className='item items col-8' style={mystyle} key={curlElem.id}>
<div>
<img src={Me} className='ui avatar image' alt="user"/>
</div>
<div className='ui content' >

<Link to={`/contactdetail/${curlElem.name}`} state={{name: curlElem.name, email: curlElem.email}}>
<h4 className='header'>{curlElem.name}</h4>
<p>Email:{curlElem.email}</p>
</Link>
  </div>
  <div >
  <Link to={`/updatecontact/${curlElem.name}`} state={{id:curlElem.id,name: curlElem.name, email: curlElem.email}}>
<i className=' alternate blue outline icon' style={{color:"red",marginLeft:"7px"}}>Edit</i>
</Link>
<button className='btn' style={{color:"red",marginLeft:"7px"}}
onClick={()=>Deleteitem(curlElem.id)}
key={curlElem.id}>Delete</button>
</div>

        </div>
);
  })
 }
    </div>
    </div>
  )
}

export default Contactlists
