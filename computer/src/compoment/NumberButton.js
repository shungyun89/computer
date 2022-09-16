



const NumberButton = (props) =>  {

    const {setnumber} = props

    return(
        <>
            <div className="number-button-body">
                <div className="number-button" onClick={setnumber(1)}>1</div>
                <div className="number-button">2</div>
                <div className="number-button">3</div>
                <div className="number-button">4</div>
                <div className="number-button">5</div>
                <div className="number-button">6</div>
                <div className="number-button">7</div>
                <div className="number-button">8</div>
                <div className="number-button">9</div>
                <div className="number-button">0</div>
                <div className="number-button">00</div>
                <div className="number-button">.</div>
            </div>
        </>
    )
}


export default NumberButton