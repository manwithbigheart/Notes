
import React, { useState } from 'react';
import './css/Dashboard.css';
import './css/Notes.css';
import Content from './Content';
import Notes from './Notes';
import NptelAss from './NptelAss';
import img1 from '../res/logo.png';
import dbms from '../res/dbms.png';
import toc from '../res/toc.png';
import se from '../res/se.png';
import hci from '../res/hci.png';
import bc from '../res/bc.png';
import img from '../res/ales-nesetril-Im7lZjxeLhg-unsplash (2).jpg'
import AddUnit from './AddUnit';
import { selectClasses } from '@mui/material';
import { useNotesProvider } from '../data/NotesProvider';
import { useNavigate } from 'react-router-dom';



function Dashboard() {

  const navigate = useNavigate();

  const [selectedBtn, setSelectedBtn] = useState(null);

  // const [notes, setNotes] = useState({});
  const { topics } = useNotesProvider();
  const [dashboard, setDashboard] = useState(true);


  const btnClicked = (category) => {
    setSelectedBtn(category);
  };



  const notesBtn = () => {
    // setNotes(true);
    setDashboard(false); // Hide the other component
    // btnClicked('button1');
    setSelectedBtn('button1');
  };

  const dashboardBtn = () => {
    // setNotes(true);
    setDashboard(false); // Hide the other component
  };



  return (
    <>

      <div className='ChangeSem active'>
        <button className={`changeSem-btn  ${selectedBtn === 'button1' ? 'selected' : ''}`}
          onClick={notesBtn}>Semester 5</button>
        <button className={`changeSem-btn  ${selectedBtn === 'button2' ? 'selected' : ''}`}
          onClick={() => btnClicked('button2')}>Semester 6</button>

      </div>


      {/* {notes && <Notes data = {data}/>} */}
      {/* <Notes data = {notes}/> */}

      {dashboard && <>
        {Object.keys(topics).map((topic) => (
          <>
            {topics[topic]?.Subjects && Object.keys(topics[topic]['Subjects']).map((subject, index) => (
              <>
                <div className={index % 2 === 0 ? 'container1' : 'container1 hidden'} key={subject}>
                  <div className='content'>
                    <div className='title'>
                      <h3>{subject}</h3>
                    </div>
                    <div className='links-container'>
                      <div className='links'>
                        {Object.keys(topics[topic]['Subjects'][subject]['Units']).map((unit, index) => (
                          <a onClick={() => { navigate('/notes') }} >
                            {unit}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='image'>
                    <img src={topics[topic]['Subjects'][subject]['Image']} alt={`Image for ${subject}`} />
                  </div>
                </div>
                <div className={index % 2 === 0 ? 'container1 hidden' : 'container1'} key={subject}>
                  <div className='image'>
                    <img src={topics[topic]['Subjects'][subject]['Image']} alt={`Image for ${subject}`} />
                  </div>
                  <div className='content'>
                    <div className='title'>
                      <h3>{subject}</h3>
                    </div>
                    <div className='links-container'>
                      <div className='links'>
                        {Object.keys(topics[topic]['Subjects'][subject]['Units']).map((unit, index) => (
                          <a onClick={() => { navigate('/notes') }} >
                            {unit}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </>
        ))}
      </>}



      {/* <NptelAss /> */}
    </>
  )
}

export default Dashboard