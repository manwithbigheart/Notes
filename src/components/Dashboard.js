
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



function Dashboard() {

  const [selectedBtn, setSelectedBtn] = useState(null);

  const [notes, setNotes] = useState(false);
  const [dashboard, setDashboard] = useState(true);

  
  const btnClicked = (category) => {
    setSelectedBtn(category);
  };



  const notesBtn = () => {
    setNotes(true);
    setDashboard(false); // Hide the other component
    // btnClicked('button1');
    setSelectedBtn('button1');
  };

  const dashboardBtn = () => {
    setNotes(true);
    setDashboard(false); // Hide the other component
  };



  const [data, setData] = useState({
    Notes: {
      Subjects: {
        "Database Management System": {
          Units: {
            "Unit 01": 'https://drive.google.com/file/d/13j1BVEpfs56xEcpkN2OeZXfcyEsoM56a/view?usp=share_link',
            "Unit 02": 'https://drive.google.com/file/d/1UuN1Ix38cwZRs33qiynK0xY83qCPl6fO/view?usp=share_link',
            "Unit 03": 'https://drive.google.com/file/d/1V-Yr7KHkCSYokv9kq62g5nNVJZ7Frk45/view?usp=share_link',
            "Unit 04": 'https://drive.google.com/file/d/1bC_LWUuQzpZcrVgb8buVvca64xKFyx36/view?usp=share_link'
          },
          Image: dbms
        },
        "Theory of Computation": {
          Units: {
            "Unit 01": 'https://drive.google.com/file/d/11z4pnB5TiFP_EHcv2ASH_0eNMnesINVo/view?usp=sharing',
            "Unit 02": 'https://drive.google.com/file/d/1TM4GtawMoYEcxrmDRYTPU-A_WY2q7Bti/view?usp=share_link'
          },
          Image: toc
        },
        "Software Engineering": {
          Units: {
            "Unit 01": 'https://drive.google.com/file/d/121Z8xc5sQJHm-Mbqz0u6iMGMx0Qo1cbx/view?usp=sharing',
            "Unit 02": 'https://drive.google.com/file/d/1TK2u1LMW838uIgWsbXwtKAaUnLNsuSzK/view?usp=share_link'
          },
          Image: se
        },
        "Human Computer Interaction": {
          Units: {
            "Unit 01": 'https://drive.google.com/file/d/11sSSTRa43Hg9SsW3JyDUCYyWg4zxCnTT/view?usp=sharing',
            "Concept Map U01": 'https://drive.google.com/file/d/1X7O6o4-hgn1m2TxROnNOwvSAo9tBcvOP/view?usp=share_link',
            "Concept Map U02": 'https://drive.google.com/file/d/1KGjN9M015XjZfBYuDBkJh1WryTmRU9-4/view?usp=share_link'
          },
          Image: hci
        },
        "Business Communication": {
          Units: {
            "Unit 01": 'https://drive.google.com/file/d/1AEBz4m6bf-eGATLJvtYMv15dbFzmqJux/view?usp=sharing'
          },
          Image: bc
        }
      }
    },
    Assignments: {
      Subjects: {
        "Database Management System": {
          Units: {
            "A01-A03": 'https://drive.google.com/file/d/1rgvZ8njh5boftoEomi5NHmJRLrVSmeq1/view?usp=share_link'
          },
          Image: dbms
        },
        "Software Engineering": {
          Units: {
            "A01": 'https://drive.google.com/file/d/1w0Ue1sZaOPEhJ55r5MuIcQs8P0mQCdwJ/view?usp=share_link'
          },
          Image: se
        },
        "Human Computer Interaction": {
          Units: {
            "A01": 'https://drive.google.com/file/d/1z-63qQD1DmzHXj_ThmgDD7G4kOzoK97D/view?usp=share_link',
            "A02": 'https://drive.google.com/file/d/1U3s7pbuY2nRn_7mjvL6k0DNPw0cYOxPs/view?usp=share_link',
            "A03": 'https://drive.google.com/file/d/1eYcSJG32RF7mqpritgSuG5z4NPb7_-Gn/view?usp=share_link'
          },
          Image: hci
        },
        "Bussiness Communication": {
          Units: {
            "A01": 'https://drive.google.com/file/d/1_esZk3qnj_CKhlP6v8Gxu8Y7Sqe8U6mb/view?usp=share_link',
            "A02": 'https://drive.google.com/file/d/1s7uaWSuFxhxuzTASzQ8RBfQu8yOosRX7/view?usp=share_link',
            "A03": 'https://drive.google.com/file/d/1XHVAupAKLFkh6tzOmWKaINV0Z8xEwCf1/view?usp=share_link'
          },
          Image: bc
        }
      }
    }
  });

  const [data1, setData1] = useState({
    Dashboard: {
      Subjects: {
        "Notes": {
          Units: {
            "Semester 5": '#',
            "Semester 6": '#'
          },
          Image: img
        },
        "Assignments": {
          Units: {
            "Semester 5": '#',
            "Semester 6": '#'
          },
          Image: img
        },
        "Practicals": {
          Units: {
            "Semester 5": '#',
            "Semester 6": '#'
          },
          Image: img
        },
        "NPTEL": {
          Units: {
            "Semester 5": '#',
            "Semester 6": '#'
          },
          Image: img
        }
      }
    }
  })
  
  
  
  return (
    <React.Fragment>

      <div className='ChangeSem active'>
        <button className={`changeSem-btn  ${selectedBtn === 'button1' ? 'selected' : ''}`}
        onClick={notesBtn}>Semester 5</button>
        <button className={`changeSem-btn  ${selectedBtn === 'button2' ? 'selected' : ''}`}
        onClick={() => btnClicked('button2')}>Semester 6</button>

      </div>


      {notes && <Notes data = {data}/>}

      {dashboard && <>
        {Object.keys(data1).map((topic) => (
        <>
          {data1[topic]?.Subjects && Object.keys(data1[topic]['Subjects']).map((subject, index) => (
            <>
              <div className={index % 2 === 0 ? 'container1' : 'container1 hidden'} key={subject}>
                <div className='content'>
                  <div className='title'>
                    <h3>{subject}</h3>
                  </div>
                  <div className='links-container'>
                    <div className='links'>
                      {Object.keys(data1[topic]['Subjects'][subject]['Units']).map((unit, index) => (
                        <a target='_blank' key={index} href={data1[topic]['Subjects'][subject]['Units'][unit]}>
                          {unit}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='image'>
                  <img src={data1[topic]['Subjects'][subject]['Image']} alt={`Image for ${subject}`} />
                </div>
              </div>
              <div className={index % 2 === 0 ? 'container1 hidden' : 'container1'} key={subject}>
                <div className='image'>
                  <img src={data1[topic]['Subjects'][subject]['Image']} alt={`Image for ${subject}`} />
                </div>
                <div className='content'>
                  <div className='title'>
                    <h3>{subject}</h3>
                  </div>
                  <div className='links-container'>
                    <div className='links'>
                      {Object.keys(data1[topic]['Subjects'][subject]['Units']).map((unit, index) => (
                        <a target='_blank' key={index} href={data1[topic]['Subjects'][subject]['Units'][unit]}>
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



      <NptelAss />

    </React.Fragment>
  )
}

export default Dashboard