


const OperationButton = (props) => {

    const {setnum, num} = props
    
    const handleClick = (e) =>{
        setnum(num.concat(e.target.id))
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