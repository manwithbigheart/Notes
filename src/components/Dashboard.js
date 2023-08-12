import React from 'react'
import './css/Dashboard.css'
import Content from './Content';
import Notes from './Notes';

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


function Dashboard() {
  return (
    <React.Fragment>
      <Notes/>
      <Content title1={title1} title2={title2} list1={obj1} list2={list2}/>
      <Content title1={title1} title2={title2} list1={obj1} list2={list2}/>
    </React.Fragment>
  )
}

export default Dashboard