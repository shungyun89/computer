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
        
    const numarr = []

    const [num, setnum] = useState("")



    return (
        <div>
            <div className="wrap">
                <div className="computer">
                    <Screen num={num} />
                    <div className="center-button">
                        <Number setnum={setnum} num={num} />
                        <OperationButton setnum={setnum} num={num}/>
                    </div>
                    <div className="ac-body">
                        <ReturnButton setnum={setnum} num={num} />
                    </div>
                </div>
            </div>
            <button onClick={()=>{console.log(numarr)}}></button>
        </div>
    );
}

export default App;
