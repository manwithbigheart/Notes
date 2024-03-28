import { React } from 'react';
import './css/NptelAss.css';

function NptelAss() {

    // const [questions, setQuestions] = useState({
    //     question:{
    //         id:1,
    //         title: "first question",
    //         opts:['first','second','third','fourth']
    //     }
    // })

    const questions = {
        question:{
            id:1,
            title: "first question",
            opts:['first','second','third','fourth']
        }
    }




  return (
    <>
        <div className='NptelAss'>
            <div className='week-title'>Week 01</div>
            {Object.values(questions).map((q)=> (
                <div className='question' key = {q.id}>
                    <div className='question-title'>
                        <p id='qno'>{q.id} . </p>
                        <p id='qtitle'>{q.title}</p>
                    </div>
                    <div className='opts'>
                        <ol type={null}>
                        {q.opts.map((opt, index) => (
                                <li key={index}>
                                    <input type='radio' name={`opt_${q.id}`} />
                                    {opt}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            ))}
        </div>
        
    </>
  )
}

export default NptelAss