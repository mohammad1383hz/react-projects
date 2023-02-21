import React,{useState} from "react";
const Student=(props)=>{
    const update=()=>{
        props.update(props.item.id)
    }
    const updatename=(event)=>{
        const updateName=event.target.value;
    }
    const updateclass=(event)=>{
        const updateClass=event.target.value;

    }

     return(
        <div>
            <h2>id:{props.item.id}</h2>
            {/* <input>name:{props.item.name}</input> */}
            <label>
            name:
            {/* <input type="text" id="fname">{props.item.name}</input><br></br> */}
            {/* <input type="text" id="fn" /><br></br> */}

            </label>
            <label>
            name:
            <input type="text" id="f" value={props.item.name} onChange={props.upclass}/><br></br>
            </label>
            {/* <input>class:{props.item.class}</input> */}
            {/* <button>deletestudent</button> */}
            <label>
                <button
                onClick={props.delete}
                >
                حذف
                </button>
                <br/>
                <br/>


                <button
                onClick={update}
                >
                update
                </button>
             </label>
            <br/>
            <br/>
            <br/>

        </div>
     );
}
export default Student;
