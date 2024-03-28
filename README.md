Readme Edited
#################################################################

// for deploying any react app 

1. $ git install gh-pages --save-deve

2. Edit package.json file
    i. add "homepage": "https://manwithbigheart.git.io/Notes"
        on top
    ii. add 
        "predeploy":"npm run build"
        "deploy":"gh-pages -d build"
        in scripts 

3. $ npm run deploy

----------------------------------------------------------------



################################################################

# for colours 

    https://colours.neilorangepeel.com/

# for color palate

    https://coolors.co/




#################################################################

Light more 

1. Gold - #E1A140
2. Puss - #532200
3. Sand-doller - #EFCFA0
4. Burnt Orange - #914110

Dark Mode 

1. Royal Blue - #091235
2. Navy Blue - #14202E
3. Midnight Blue - #2B4257
4. Blue Gray - #88A9C3



#################################################################





  const [data, setData] = useState({
    topic1: {
      Subjects: {
        subject1: { Units: ['unit1', 'unit2'] },
        subject2: { Units: ['unit3', 'unit4'] }
      }
    },
    topic2: {
      Subjects: {
        subject3: { Units: ['unit5', 'unit6'] },
        subject4: { Units: ['unit7', 'unit8'] }
      }
    }
  });

  function addUnit(topic, subject, unit) {

    topic = document.getElementById('topic').value;
    subject = document.getElementById('subject').value;
    unit = document.getElementById('unit').value;

    setData(prevData => {
      const newData = { ...prevData };
      if (!newData[topic]) {
        newData[topic] = {};
      }
      if (!newData[topic]['Subjects']) {
        newData[topic]['Subjects'] = {};
      }
      if (!newData[topic]['Subjects'][subject]) {
        newData[topic]['Subjects'][subject] = { Units: [] };
      }
      newData[topic]['Subjects'][subject]['Units'].push(unit);
      return newData;
    });
  }

