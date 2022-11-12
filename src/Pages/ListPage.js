import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {Link} from "react-router-dom";
const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {"Content-Type":"application/json"}
})
const ListPage = () => {
  const[list, setList] = useState([]);

  const deleteItem = (item) => {
    console.log(item);

    api.delete("courses/" + item.id).then( (res)=>{
      getdata();
    })
  }

 

  useEffect(()=>{
    getdata();
  },[])
const getdata= () => {
  api.get("/courses").then((res)=>{
    console.log(res);
    setList(res.data);
})
}

const activeItem = (item) => {
  item.status="activeItem"
  var id = item.id;
  delete item.id;
  console.log(item)
  api.put ("courses/"+id, item);
  }
  

const inactiveItem = (item) => {
  item.status="inactiveItem";
  var id = item.id;
  delete item.id;
  api.put("courses/"+id, item);
  console.log(item)
}
  return (<>
  <div className="container">
    <h2>Course List</h2>
    <p>THE table-bordered class adds borders to a table:</p>
    <table className = "table table-bordered">
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          list && list.map((item)=>{
            return(
              <>
              <tr>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>
                  <button className="btn btn-warning btn-sm" onClick={()=>{
                    deleteItem(item)
                  }}>Delete</button>
                  &nbsp;
                  <button className="btn btn-primary btn-sm">view</button>
                  &nbsp;
                  <Link to={"/view/"+item.id} style={{color:"white"}}>View</Link>
                  <button className="btn btn-primary btn-sm" onClick={()=>{
                    activeItem(item)
                  }}>Active</button>
                  &nbsp;
                  <button className="btn btn-primary btn-sm" onClick={()=>{
                    inactiveItem(item)
                  }}>Inactive</button>
                  </td>
                  </tr>
                  </>
            )
          })
        }
      </tbody>
    </table>
  </div>
</>
    
  )
}

export default ListPage;