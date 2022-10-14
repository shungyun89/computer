


const OperationButton = (props) => {

    const {setnum, num} = props
    
    const handleClick = (e) => {
        const numLast = num.length-1
        switch(num[numLast]){
            case '+':
                setnum(num.substr(0,numLast).concat(e.target.id))
                break;
        
            case '-':
                setnum(num.substr(0,numLast).concat(e.target.id))
                break;
        
            case '*':
                setnum(num.substr(0,numLast).concat(e.target.id))
                break;
        
            case '/':
                setnum(num.substr(0,numLast).concat(e.target.id))
                break;
                    
            default:
                setnum(num.concat(e.target.id))
                break;
        }
    }

    return(
        
        <div className="operation-button-body">
            <div className="operation-button" id="+" onClick={handleClick}>+</div>
            <div className="operation-button" id="-" onClick={handleClick}>-</div>
            <div className="operation-button" id="*" onClick={handleClick}>*</div>
            <div className="operation-button" id="/" onClick={handleClick}>/</div>
        </div>
    )
}


export default OperationButton