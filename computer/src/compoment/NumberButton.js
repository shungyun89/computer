import {useEffect} from "react"



const NumberButton = (props) =>  {

    const {setnumber} = props

    let newnum = 0
    const addnumber = (number) => {
        newnum = Number(newnum.toString()+number)
        console.log(newnum)
    }
    
    return(
        <>
            <div className="number-button-body">
                <div className="number-button" onClick={()=>{addnumber(1)}}>1</div>
                <div className="number-button" onClick={()=>{addnumber(2)}}>2</div>
                <div className="number-button" onClick={()=>{addnumber(3)}}>3</div>
                <div className="number-button" onClick={()=>{addnumber(4)}}>4</div>
                <div className="number-button" onClick={()=>{addnumber(5)}}>5</div>
                <div className="number-button" onClick={()=>{addnumber(6)}}>6</div>
                <div className="number-button" onClick={()=>{addnumber(7)}}>7</div>
                <div className="number-button" onClick={()=>{addnumber(8)}}>8</div>
                <div className="number-button" onClick={()=>{addnumber(9)}}>9</div>
                <div className="number-button" onClick={()=>{addnumber(0)}}>0</div>
                <div className="number-button">00</div>
                <div className="number-button">.</div>
            </div>
        </>
    )
}


export default NumberButton