//hooks
import  {useState} from 'react';
//conpoment
import NumberButton from './compoment/NumberButton';
import OperationButton from './compoment/OperationButton';
import ReturnButton from './compoment/ReturnButton';
import Screen from './compoment/Screen';
//css
import './computer.scss'


function App(props) {


    const [number, setnumber] = useState('')    
    
        
    return (
        <div>
            <div className="wrap">
                <div className="computer">
                    <Screen />
                    <div className="center-button">
                        <NumberButton setnumber={setnumber} />
                        <OperationButton />
                    </div>
                    <div className="ac-body">
                        <ReturnButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
