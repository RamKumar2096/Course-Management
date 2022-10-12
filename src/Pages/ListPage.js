import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {"content-type":"application/json"}
})
const ListPage = () => {
  const[list, setList] = useState([]);

  useEffect(()=>{
    api.get("/courses").then((res)=>{
      console.log(res);
      setList(res.data);
    })
  }, [])
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
                <td>Doe</td>
                <td>
                  <button className="btn btn-warning btn-sm">Delete</button>
                  &nbsp;
                  <button className="btn btn-primary btn-sm">view</button>
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