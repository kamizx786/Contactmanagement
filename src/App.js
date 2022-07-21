import React, { useEffect, useState } from "react";
import Header from "./components/header";
import AddContact from "./components/AddContact";
import Contactlists from "./components/Contactlists";
import EditContact from "./components/EditContact";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ContactDetail from "./components/ContactDetail";
import api from "./api/contacts";
function App(){
const[contactdata,setcontactdata]=useState([]);
const [searchTerm,setsearchTerm]=useState("");
const [searchresult,setsearchResult]=useState("");
//Search Contacts
const searchHanlder=(searchterm)=>{
  setsearchTerm(searchterm);
  if(searchTerm!=="")
  {
    const UpdatedSearch= contactdata.filter((elem)=>{
    return (
      Object.values(elem).join("").toLowerCase().includes(searchTerm.toLowerCase())
    );
    })
    setsearchResult(UpdatedSearch);
  }
  else{
    searchresult(contactdata);
  }

}
//Retreive Contacts
const retreivecontacts=async()=>{
 const response= await api.get("/contacts");
 const data= await response.data;
setcontactdata(data);
}
useEffect(()=>{
retreivecontacts();
},[]);
//Add Contacts
const AddChangeHandler= async(contact)=>{
const response=await api.post("/contacts",contact);
setcontactdata([...contactdata,response.data]);
console.log(response);
  }
// useEffect(()=>{
//   localStorage.setItem("ContactList",JSON.stringify(contactdata));
// },[contactdata])
const UpdateChangeHandler=async(contact)=>{
const response=await api.put(`/contacts/${contact.id}`,contact);
const{id,name,email}=response.data;
setcontactdata(contactdata.map((contdata)=>{
return contdata.id===id? {...response.data}:contdata;
}));
}
const deletehandler=async(id)=>{
api.delete(`/contacts/${id}`);
const Updateditem=contactdata.filter((contact)=>{
  return contact.id!==id;
})
setcontactdata(Updateditem);
}
  return (
 
 <div className="ui container App">
<Router>
<Header/>
<Routes>
<Route path="/" element={<Contactlists 
Contact={searchTerm.length> 1? searchresult:contactdata}
 deletehandler={deletehandler}
 Term={searchTerm}
 SearchKeyword={searchHanlder}
 /> }/>
<Route path="/add" element={<AddContact AddChangeHandler={AddChangeHandler}/>} />
<Route path="/contactdetail/:name" element={<ContactDetail  />}/>
<Route path="/updatecontact/:name" element={<EditContact  UpdateChangeHandler={UpdateChangeHandler}/>}/>
 </Routes>
 </Router>
   </div>
   );

 
}

export default App;
