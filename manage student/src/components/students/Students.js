
import React,{ useState } from "react";
import Student from './student/Student.js';
const Students=(props)=>{
const[students,setStudents]=useState([
    {"id":1,"name":"Ali","class":101},
    {"id":2,"name":"mohammad","class":201},
    {"id":3,"name":"zahra","class":301},
])
const deletestudent=() => {
  console.log('delete');
}
// const astudents=[...students]
    
    // return(
    //     // <h2>{astudents}</h2>
    //     // {astudents.maps((item,index)=>
    //     // <Student/>
    //     // )}


    // )
    return (
        <div>
          <h2>salam</h2>
          {[...students].map(item => (
            <Student item={item} deletestudent={deletestudent}/>
            // <li>{item.nam}</li>
            ))}
        </div>
      );

}



export default Students;