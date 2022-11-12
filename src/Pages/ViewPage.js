import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const api = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {"content-type": "application/json"}
})

const ViewPage = () => {

  const data = useParams();
  console.log(data.id);
  const[form, setForm] = useState({title: "" , description: "" })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    api.put("courses/" + data.id, form).then((res) => {
      console.log(res);
      setForm({title: "" , description: "" });
      Swal.fire({
        title: "Example",
        text: "Swal injected",
        icon: "success",
      });
    })
  }

  useEffect(() => {
    api.get("courses/" +data.id).then((res) =>{
      setForm({title:res.data.title,description:res.data.description});
    })
  })
  return ( <> <div className= "container">
  <div className= "row">
    <div className= "col-md-5 col-offset-3" style={{marginLeft:"24%"}}>
      <br/>
      <form onSubmit={handleSubmit}>
        <div class= "form-group">
          <label for= "title">Course Name</label>
          <input value= {form.title} type= "text" onChange= { (e) => {
            setForm({...form, title:e.target.value});
          }} class= "form-control" id="title" aria-describedby= "emailHelp" placeholder= "Course Name"/>
          <br/>
        </div>
        <div className= "form-group">
          <label for="courseDesc">Course Description</label>
          <input value={form.description} type= "text" onChange={ (e) => {
            setForm({...form, description:e.target.value});
          }} className= "form-control" id= "courseDescription" placeholder= "course Description"/>
        </div>
        <button type= "submit" className= "btn btn-primary">Update</button>
      </form>
    </div>
  </div>
</div>
</>
   
  );
}

export default ViewPage