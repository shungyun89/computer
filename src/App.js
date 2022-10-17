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

    const [newarr, setnewarr] = useState([])

    return (
        <div>
            <div className="wrap">
                <div className="computer">
                    <Screen num={num} newarr={newarr} />
                    <div className="center-button">
                        <Number setnum={setnum} num={num} setnewarr />
                        <OperationButton setnum={setnum} num={num} newarr={newarr} setnewarr={setnewarr} />
                    </div>
                    <div className="ac-body">
                        <ReturnButton setnum={setnum} num={num} newarr={newarr} setnewarr={setnewarr} />
                    </div>
                </div>
            </div>
            <button className='number-button' onClick={()=>{console.log(newarr)}}></button>
        </div>
    );
}

export default App;
