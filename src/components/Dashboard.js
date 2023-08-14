
import React, { useState } from 'react';
import './css/Dashboard.css';
import Content from './Content';
import Notes from './Notes';
import img1 from '../res/logo.png';
import dbms from '../res/dbms.png';
import toc from '../res/toc.png';
import se from '../res/se.png';
import hci from '../res/hci.png';
import bc from '../res/bc.png';
import AddUnit from './AddUnit';
import { selectClasses } from '@mui/material';




// const title1 = "Notes";
// const title2 = "Assignment";
// const list1 = ['Semester 5',"Semester 6"]
// const list2 = ['Semester 5','Semester 6']



// const subjects_5 = {
//   'Database Management System' : ['Unit 1','Unit 2','Unit 3','Unit 4','Unit 5'],
//   'Theory of Computation': ['Unit 1','Unit 2','Unit 3','Unit 4','Unit 5'],
//   'Software Engineering' : ['Unit 1','Unit 2','Unit 3','Unit 4','Unit 5'],
//   'Human Computer Intraction' : ['Unit 1','Unit 2','Unit 3','Unit 4','Unit 5'],
//   'Business Communication' : ['Unit 1','Unit 2','Unit 3','Unit 4','Unit 5'],
// }

// // const topics = ['Notes','Assignments','Practicals','NPTEL']

// const data = {
//   'Notes' : subjects_5,
//   'Assignments' : subjects_5,
//   'Practicals' : subjects_5,
//   'NPTEL' : subjects_5
// }


// const obj1 = list1.map((item,i)=>(
//   {
//       id : i,
//       title : item
//   }
// ))


function Dashboard() {

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
  
  
  
  return (
    <React.Fragment>

      {/* <AddUnit setData={setData}/> */}

      <Notes data = {data}/>
      {/* <Notes data = {data} subjects_5 = {subjects_5}/> */}

      {/* <Content title1={title1} title2={title2} list1={obj1} list2={list2}/>
      <Content title1={title1} title2={title2} list1={obj1} list2={list2}/> */}
    </React.Fragment>
  )
}

export default Dashboard