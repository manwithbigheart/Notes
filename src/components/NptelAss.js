import React from 'react';
import './css/NptelAss.css';

function NptelAss() {
  return (
    <>
        <div className='NptelAss'>
            <div className='week-title'>Week 01</div>
            <div className='question'>
                <div className='question-title'>
                    <p id='qno'>1. </p>
                    <p id='qtitle'> This is question first and i have to make it responsive to phone</p>
                </div>
                <div className='opts'>
                    <ol type='a'>
                         <li> <input type='radio' name='opt'/> Opt1</li>
                         <li> <input type='radio' name='opt'/> Opt1</li>
                         <li> <input type='radio' name='opt'/> Opt1</li>
                         <li> <input type='radio' name='opt'/> Opt1</li>
                    </ol>
                </div>
                
            </div>
        </div>
        
    </>
  )
}

export default NptelAss