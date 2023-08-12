import React from 'react';
import img1 from '../res/logo.png';
import './css/Content.css';


function Content(props) {
    // console.log(props);



  return (
    <React.Fragment>
        <div className='container1'>
            <div className='content'>
                <div className='title'>
                    {props.title1}
                </div>
                <div className='links'>
                    {props.list1.map((item)=>(
                        <a href={item.title} key={item.id}>{item.title}</a>
                        ))}
                </div>
            </div>
            <div className='image'>
                <img src={img1}/>
            </div>
        </div>

        <div className='container2 '>
            
            <div className='image'>
                <img src={img1}/>
            </div>
            <div className='content'>
                <div className='title'>
                    {props.title2}
                </div>
                <div className='links'>
                    {props.list2.map((item,i) =>(
                        <a href={item} key={i}>{item}</a>

                    ))}

                </div>
            </div>
        </div>
        
    </React.Fragment>
  )
}

export default Content