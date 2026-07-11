import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const Viewpage = () => {

    const [data,ChangeData]=useState([])
    const fetchData =()=>{
        axios.get("https://host-demo-app.onrender.com/api/courses").then(


            (Response)=>{

                ChangeData(Response.data)
            }
        ).catch()
    }
    useEffect(

        ()=>{

            fetchData()
        },[]
    )
  return (
    <div>
        <NavigationBar />
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Course Name</th>
      <th scope="col">Duration</th>
      <th scope="col">Fee</th>
      <th scope="col">Mode</th>
      <th scope="col">Trainer</th>
      <th scope="col">Created at</th>
    </tr>
  </thead>
  <tbody>
        {data.map(

            (value,index)=>{


                return(
                            <tr>
      <th scope="row">{value.course_name}</th>
      <td>{value.duration}</td>
      <td>{value.fee}</td>
      <td>{value.mode}</td>
      <td>{value.trainer}</td>
      <td>{value.created_at}</td>
    </tr>
                )
            }
        )}
    
    
    
  </tbody>
</table>
    </div>
  )
}

export default Viewpage