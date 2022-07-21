import React from 'react'
import me from "../images/me3.jpg"
import {Link} from "react-router-dom"
import {useLocation} from "react-router-dom"
const ContactDetail = () => {
  const location=useLocation();
  const {name,email}=location.state;
  // console.log(props.detailcontact);
  // const{id,name,email}=props.detailcontact;
  return (
   <div className='main'>
    <div className='ui card centered'>
      <div className='image'>
<img src={me} alt="me"/>
      </div>
<div className='content'>
<div className='header'>Name:{name}</div>
<div className='discription'>Email:{email}</div>
</div>
<div className="center-div">
<Link to="/">
<div><button className='ui button blue centered'>Back to Contact</button></div>
</Link>
</div>
    </div>
   
   </div>
  )
}

export default ContactDetail
