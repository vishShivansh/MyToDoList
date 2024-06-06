"use client"
import { useState } from "react";

const page = () => {
  // Two Way Binding
  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  const [MainTask, setMainTask] = useState([])
  const submitHandler=(e)=>{
      e.preventDefault();
      // Spread Operator
      setMainTask([...MainTask, { task, desc}])
      settask("")
      setdesc("")
  }

  const deleteHandler = (i)=>{
      let copyTask = [...MainTask]
      copyTask.splice(i,1)
      setMainTask(copyTask)
  }


  let renderTask = <h2>No Task Available</h2>

    if(MainTask.length>0)
    {
      renderTask = MainTask.map((t,i)=>{
        return(
          <li className="flex items-center justify-between">
          <div className="flex justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.task}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button onClick={()=>{
            deleteHandler(i);
          }} className=" bg-red-400 px-4 py-2 rounded text-white font-bold mb-5">Delete</button>
      </li>
        )
      })
    }

  return (  
    <>
    <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">My To-Do-List</h1>
    <form onSubmit={submitHandler}>
      <input 
      type="text" 
      className=" border-4 text-2xl border-zinc-800 px-4 py-2 m-8 rounded" 
      placeholder="Enter Task here" 
      value={task}
      onChange={(e)=>{
       settask(e.target.value);
      }}
      />

      <input 
      type="text" 
      className=" border-4 text-2xl border-zinc-800 px-4 py-2 m-8 rounded" 
      placeholder="Enter Description here"
      value={desc}
      onChange={(e)=>{
       setdesc(e.target.value);
      }}

      />
      <button className=" bg-black text-white px-4 py-3 rounded font-bold text-2xl">Add Task</button>
    </form>
    <hr/>
    <div className="p-8 bg-slate-200">
      <ul>{renderTask}</ul>
      <hr className="bg-white w-6"/>

    </div>
    </>
  )
}
 
export default page;