


const NumberButton = (props) =>{





    return(
        <>
        <div className="number-button" id={props.id} onClick={props.onClick}>{props.value}</div>
        </>
    )
}


export default NumberButton