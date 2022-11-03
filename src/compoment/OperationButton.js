


const OperationButton = (props) => {

    const {setnum, num, newarr, setnewarr, setanswer} = props

    
    const OperationClick = (e) => {
        const buttonId = e.target.id
        if(newarr.length === 0){
            setnewarr(newarr => [...newarr, num])
            setnewarr(newarr => [...newarr, (buttonId)])
            setnum('')
            setanswer('')
        }else {
            switch (newarr[1]) {
                case '+':
                    if (num === '') {
                        setnum(0)
                    }
                    console.log(newarr[0]);
                    console.log(num); 
                    setnewarr(newarr => [Number(parseFloat(Number(newarr[0]) + Number(num)).toPrecision(12)),buttonId])
                    setnum('')
                    setanswer(Number(parseFloat(Number(newarr[0]) + Number(num)).toPrecision(12)))
                    break;
                case '-':
                    if (num === '') {
                        setnum(0)
                    }
                    console.log(newarr[0]);
                    console.log(num); 
                    setnewarr(newarr => [Number(parseFloat(Number(newarr[0]) - Number(num)).toPrecision(12)),buttonId])
                    setnum('')
                    setanswer(Number(parseFloat(Number(newarr[0]) - Number(num)).toPrecision(12)))
                    break;
                case '*':
                    if (num === '') {
                        setnum(1)
                    }
                    console.log(newarr[0]);
                    console.log(num); 
                    setnewarr(newarr => [Number(parseFloat(Number(newarr[0]) * Number(num)).toPrecision(12)),buttonId])
                    setnum('')
                    setanswer(Number(parseFloat(Number(newarr[0]) * Number(num)).toPrecision(12)))
                    break;
                case '/':
                    if (num === '') {
                        setnum(1)
                    }
                    console.log(newarr[0]);
                    console.log(num); 
                    setnewarr(newarr => [Number(parseFloat(Number(newarr[0]) / Number(num)).toPrecision(12)),buttonId])
                    setnum('')
                    setanswer(Number(parseFloat(Number(newarr[0]) / Number(num)).toPrecision(12)))
                    break;          
                default:
                    break;
            }
        }
    }
    console.log(newarr);

    return(
        
        <div className="operation-button-body">
            <div className="operation-button" id="+" onClick={OperationClick}>+</div>
            <div className="operation-button" id="-" onClick={OperationClick}>-</div>
            <div className="operation-button" id="*" onClick={OperationClick}>*</div>
            <div className="operation-button" id="/" onClick={OperationClick}>/</div>   
        </div>
    )
}


export default OperationButton