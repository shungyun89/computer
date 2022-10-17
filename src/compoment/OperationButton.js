


const OperationButton = (props) => {

    const {setnum, num, newarr, setnewarr} = props

    
    const OperationClick = (e) => {
        
        if(newarr.length === 0){
            setnewarr(newarr.push(num))
            console.log(newarr);
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