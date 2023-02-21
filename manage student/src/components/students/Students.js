
import React,{ useState } from "react";
import Student from './student/Student.js';
const Students=(props)=>{
const[students,setStudents]=useState([
    {"id":1,"name":"Ali","class":101},
    {"id":2,"name":"mohammad","class":201},
    {"id":3,"name":"zahra","class":301},
])
const[name,setName]=useState('')

const[classname , setClass]=useState('')

const deletestudent=(index,p) => {
  // console.log(index);
  const removestudent=[...students];
  removestudent.splice(index,1);
  setStudents(removestudent);
  alert("delete")
}
const updatestudent=(id,updatename,updateclass) => {
 const s=students.find(x=>x.id==id);
  console.log(s)
 
}
const updateclass=(event)=>{
  const updateClass=event.target.value;

}

    const createname=(event)=>{
      setName(event.target.value)
    }
    const createclass=(event)=>{
      setClass(event.target.value)
    }
    const createStudent=()=>{
      const id=students.length;
      const newStudent={"id":id,"name":name,"class":classname}
      const Students=[...students,newStudent]
      setStudents(Students)
      alert("craete student")
      
    }

    return (
        <div>
          <h2>craete student</h2>
          <label>
            name:
            <input type='text' onChange={createname}/>
          </label>
          <label>
            class:
            <input type='integer'onChange={createclass}/>
          </label>
          <button style={{color:'red'}} onClick={createStudent}>create student</button>
          <br/>
          <br/>
          <br/>
          

          {[...students].map(item => (
            <Student key={item.id} item={item} delete={deletestudent} update={updatestudent} upclass={updateclass}/>
            // <li>{item.nam}</li>
            ))}
        </div>
      );

}



export default Students;