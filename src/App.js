//hooks
import  {useState} from 'react';
//conpoment
import Number from './compoment/Number';
import OperationButton from './compoment/OperationButton';
import ReturnButton from './compoment/ReturnButton';
import Screen from './compoment/Screen';
//css
import './computer.scss'



function App(props) {
        
    const [num, setnum] = useState("")
    const [answer, setanswer] = useState('')
    const [newarr, setnewarr] = useState([])

    return (
        <div>
            <div className="wrap">
                <div className="computer">
                    <Screen setnum={setnum} num={num} newarr={newarr} setnewarr={setnewarr} answer={answer} />
                    <div className="center-button">
                        <Number setnum={setnum} num={num} setanswer={setanswer} />
                        <OperationButton setnum={setnum} num={num} newarr={newarr} setnewarr={setnewarr} setanswer={setanswer} />
                    </div>
                    <div className="ac-body">
                        <ReturnButton setnum={setnum} num={num} newarr={newarr} setnewarr={setnewarr} setanswer={setanswer} />
                    </div>
                </div>
            </div>
            <button className='number-button' onClick={()=>{console.log(newarr)}}></button>
        </div>
    );
}

export default App;
