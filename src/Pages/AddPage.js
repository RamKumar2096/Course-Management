import { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

const api = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {"Content-Type": "application/json"}
})

const AddPage = () => {
  const [ form, setForm ] = useState({title:"", description:""})

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    api.post("courses", form).then((res)=>{
      console.log(res);
      setForm({});
      Swal.fire({
        title: "Example",
        text: "Swal injected",
        icon: "error",
      })
    })
  }
  return (<>
    <div className='container'>
      <div className='row'>
        <div className='col-md-5 col-offset-3' style={{marginLeft:"24%"}}>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Course Name</label>
              <input type="text" onKeyDown={(e)=>{
                setForm({...form,title:e.target.value});
              }} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Course Name"/>
              <br />
            </div>
            <div className = "form-group">
              <label htmlFor="courseDesc">Course Description</label>
              <input type="text" onKeyDown={(e)=>{
                setForm({...form, description:e.target.value});
              }} className="form-control" id="courseDesc" placeholder="Course Description"/>
            </div>
            < br />
            <button type="submit" className="btn btn-primary">submit</button>
          </form>
        </div>
      </div>
    </div>  
    </>)
  
}

export default AddPage;