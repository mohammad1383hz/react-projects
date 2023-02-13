import React,{useState} from "react";
const Student=(props)=>{
    console.log(props);
     return(
        <div>
            <h2>id:{props.item.id}</h2>
            <h2>name:{props.item.name}</h2>
            <h2>class:{props.item.class}</h2>
            {/* <button onSubmit={props.deletestudent}>delete student</button> */}
            <br/>
            <br/>
            <br/>

        </div>
     );
}
export default Student;
