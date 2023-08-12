import React from 'react'
import './css/Notes.css';
import { useState } from 'react';
import Content from './Content';

const title1 = "Notes";
const title2 = "Assignment";
const list1 = ['Semester 5',"Semester 6"]
const list2 = ['Semester 5','Semester 6']

const obj1 = list1.map((item,i)=>(
    {
        id : i,
        title : item
    }
  ))
  
function Notes() {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

  return (
    <>
    <div className='dropdown'>

        <button onClick={() => setIsOpen1((prev)=> !prev)}>Dropdown 1</button>
        {isOpen1 && (
            <div className='data'><Content title1={title1} title2={title2} list1={obj1} list2={list2}/></div>
            
        )}


        <button onClick={() => setIsOpen2((prev)=> !prev)}>Dropdown 2</button>
        {isOpen2 && (
            <div className='data'><Content title1={title1} title2={title2} list1={obj1} list2={list2}/></div>
            
        )}
    </div>
    
    </>
  )
}

export default Notes