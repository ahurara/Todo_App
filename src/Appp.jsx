import React, { useState } from "react";
import Todo from "./Todos";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';



const App =()=>
{
    

    const [msg,setmsg]=useState('');
    const [updated,setupdated]=useState([]);

    const setVal=(e)=>
    {
        setmsg(e.target.value);
    }

    
    const CreateTodo=()=>
    {
        setupdated((olditems)=>{
            return[...olditems,msg];
        });
        setmsg('');
    }
    

   

    return(
        <> 
         {/* main div */}
            <div className="container-fluid no-gutters" style={{backgroundColor:'#8596F1',overflow:'hidden',display: 'flex',justifyContent:'center',alignItems:'center',height:""}}>
            <div className="row g-0 flex justify-content-center m-4 " style={{overflow:'hidden',display:'flex',backgroundcolor:'black',boxShadow:'2px 2px 2px 2px #888888',borderRadius:'20px'}}>
            <div className="col-12 center g-0"  style={{borderRadius:'20px',backgroundColor:'white',overflow:'hidden'}}>
            <h1 className="mt-4 text-center" style={{display: 'inline-block',backgroundColor:'#684A97',width:'100%',color:'white'}}>TODO-APP {updated.length}</h1>
            {/* input  */}
            <div class="input-group mb-2 w-75 p-4">
            <input type="text" class="form-control" placeholder="Enter todo here..." aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={setVal} style={{ boxSizing:'border-box',border:'none',borderBottom:'5px solid #684A97',outline:'none'}} value={msg}/>
            <div class="input-group-append">
            <button class="btn " type="button" onClick={CreateTodo} style={{backgroundColor:'#684A97',color:'white',borderRadius:'90px'}}>+</button>
            </div>
            </div>
           
            
            {/* create todo */}
           
            { updated.map((i,index)=>
            {
                return <Todo task={i} id={index}  setupdatetodo={setupdated} updatetodo={updated} val={setmsg}/>
            })}
          
            </div>
            </div>
            </div>
        </>
    )
}
export default App ;

