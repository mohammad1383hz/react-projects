import React,{useState} from "react";
const Student=(props)=>{
    
     return(
        <div>
            <h2>id:{props.item.id}</h2>
            <h2>name:{props.item.name}</h2>
            <h2>class:{props.item.class}</h2>
            <button>deletestudent</button>
            {/* < style={{color: "red"}} onClick={props.delete}>delete student</lable> */}
            <label>
                <button
                onClick={props.delete}
                >
                حذف
                </button>
             </label>
            <br/>
            <br/>
            <br/>

        </div>
     );
}
export default Student;
