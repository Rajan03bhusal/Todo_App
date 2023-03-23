import React, { useState } from 'react'

export default function Todolist() {

    const[text,setText]=useState('');
    const[listdata,setListdata]=useState([]);
    function AddActivity(){
        // setListdata([...listdata,text]);
        // console.log(listdata);
        setListdata((listdata)=>{
            const newlist=[...listdata,text]
            console.log(newlist);
            setText('');
            return newlist;
          

        });


    }  

    function Removelist(i){
        const newlist=listdata.filter((ele,id)=>{
            return i!=id;
        })
        setListdata(newlist);
        
    }
    return (
    <>
    <div className='container'>
        
       <div className="header">
        TodoList
       </div>
       <input type="text" name="list" placeholder='Enter List'  value={text} onChange={(e)=>{
        setText(e.target.value)
       }} />
       <button onClick={AddActivity}>Add</button>
       <p className='list-heading'>Here is Your Todo List:{}</p>
       {listdata!=[]&& listdata.map((data,i)=>{
        return(
            <>
            <p key={i}>
               <div className="listdata">
               {data}
                </div>
                <div>
                <button className='btn-position' onClick={()=>Removelist(i)}><i class="fa-solid fa-trash"></i></button>
                </div>
              
            </p>
            </>
        

        )
            
       })}
        
        </div>

    </>
  )
}
