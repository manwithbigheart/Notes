import React, { useState } from 'react';
import img1 from '../res/logo.png';


function AddUnit(props) {


    const setData = props.setData;

    function addUnit(topic, subject, unit, unitLink, subjectImageLink) {
        topic = document.getElementById('topic').value;
        subject = document.getElementById('subject').value;
        unit = document.getElementById('unit').value;
        unitLink = document.getElementById('unitLink').value;
        subjectImageLink = document.getElementById('topic').value;
    
        subjectImageLink = img1;
    
    
        setData(prevData => {
          const newData = { ...prevData };
          if (!newData[topic]) {
            newData[topic] = { Subjects: {} };
          }
          if (!newData[topic]['Subjects'][subject]) {
            newData[topic]['Subjects'][subject] = { Units: {}, Image: subjectImageLink };
          }
          newData[topic]['Subjects'][subject]['Units'][unit] = unitLink;
          return newData;
        });
      }
    

  return (
    <div className='inputs'>
          <input id='topic' type='text' placeholder='topic'/>
          <input id='subject' type='text' placeholder='subject'/>
          <input id='unit' type='text' placeholder='unit'/>
          <input id='unitLink' type='text' placeholder='unitLink'/>
          <button onClick={addUnit}>add unit</button>
        </div>
  )
}

export default AddUnit