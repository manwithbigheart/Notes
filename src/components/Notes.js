import React from 'react'
import './css/Notes.css';
import { useState } from 'react';
import img1 from '../res/logo.png';

  
function Notes(props) {

  const data = props.data;

  
  const [isOpenTopics, setIsOpenTopics] = useState({});

  
  const toggleTopicDropdown = topic => {
    setIsOpenTopics(prevState => ({
      ...prevState,
      [topic]: !prevState[topic]
    }));
  };

  
  // addUnit('Notes', 'Subject 1', 'Unit 1');
  // addUnit('Notes', 'Subject 1', 'Unit 2');
  // addUnit('Notes', 'Subject 2', 'Unit 1');

  return (
    <>
    <React.Fragment>
    <div className='notes'>
      <div className='container'>

        {/* Render the topic toggle dropdowns */}
        {Object.keys(data).map((topic) => (
        <div className='dropdown' key={topic}>
          <button className={props.dropdown_btn} onClick={() => toggleTopicDropdown(topic)}>{topic}</button>
          {isOpenTopics[topic] && (
            <>
              {Object.keys(data[topic]['Subjects']).map((subject, index) => (
                <>
                <div className={index % 2 === 0 ? 'container1' : 'container1 hidden'} key={subject}>
                  <div className='content'>
                    <div className='title'>
                      <h3>{subject}</h3>
                    </div>
                    <div className='links-container'>
                      <div className='links'>
                        {Object.keys(data[topic]['Subjects'][subject]['Units']).map((unit, index) => (
                          <a target='_blank' key={index} href={data[topic]['Subjects'][subject]['Units'][unit]}>{unit}</a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='image'>
                    <img src={data[topic]['Subjects'][subject]['Image']} alt={`Image for ${subject}`} />
                  </div>
                </div>
                <div className={index % 2 === 0 ? 'container1 hidden' : 'container1'} key={subject}>
                  <div className='image'>
                    <img src={data[topic]['Subjects'][subject]['Image']} alt={`Image for ${subject}`} />
                  </div>
                  <div className='content'>
                    <div className='title'>
                      <h3>{subject}</h3>
                    </div>
                    <div className='links-container'>
                      <div className='links'>
                        {Object.keys(data[topic]['Subjects'][subject]['Units']).map((unit, index) => (
                          <a target='_blank' key={index} href={data[topic]['Subjects'][subject]['Units'][unit]}>{unit}</a>
                        ))}
                      </div>
                    </div>
                    
                  </div>
                </div>
                </>
              ))}
            </>
          )}
        </div>
      ))}


      </div>
    </div>
  </React.Fragment>


      {/* <div>
      {categoryKeys.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h2>{category}</h2>
          {Object.keys(subjects_5).map((subject, subjectIndex) => (
            <ul key={subjectIndex}>
              <h3>{subject}</h3>
              {data[category][subject].map((unit, unitIndex) => (
                <li key={unitIndex}>{unit}</li>
              ))}
            </ul>
          ))}
        </div>
      ))}
    </div> */}




    {/* <div className='dropdown' key={categoryIndex}>

      <button onClick={() => setIsOpen1((prev)=> !prev)}>{category}</button>
      {isOpen1 && (
          <div className='data'><Content title1={title1} title2={title2} list1={obj1} list2={list2}/></div>
      )}

    </div> */}


{/*     
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
     */}
    </>
  )
}

export default Notes