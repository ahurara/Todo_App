import React from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';




const Todo=(props)=>
{
   
    const handleDelete = () => {
         const newitem=[...props.updatetodo];
         newitem.splice(props.id,1);
         props.setupdatetodo(newitem);
         props.val('');
        console.log(props.updatetodo);
      };

    let cardColor={
        backgroundColor:'white',
        width:'max',
       
    }
   
    return(
        <>
            <div className="row no-gutters" >
            <div className="col-md-12" style={cardColor}>
            <div className="p-2">
            
            <button onClick={handleDelete} style={{ display: 'inline-block',backgroundColor:'#fd1212',color:'white' ,border:'0px solid white',borderRadius:'10px' }}>X</button>
             
             <p style={{ display: 'inline', marginLeft: '10px',color:'#684A97',fontSize:'20px',fontWeight:"bold" }}>{props.task}</p>
            </div>
            </div>
            </div>
        </>
    )
}

export default Todo;

