import NumberButton from "./NumberButton"
// import { useState } from "react"


const Number = (props) =>  {

    const {setnum,num} = props

    const handleClick = (e) => {
            setnum(num.concat(e.target.id))
    }
    

    const pointClick = (e) => {
        const numpoint = num.indexOf('.')
        const numLast = num.length-1
        if(num[num.length - 1] === undefined) {
            setnum('0' + (e.target.id))
        }else if(numpoint === -1) {
            setnum(num.concat(e.target.id))
        }else if(numpoint > -1 ){
            setnum(num)
        }
    }

    return(
            <div className="number-button-body">
                <NumberButton id="1" value="1" onClick={handleClick} />
                <NumberButton id="2" value="2" onClick={handleClick} />
                <NumberButton id="3" value="3" onClick={handleClick} />
                <NumberButton id="4" value="4" onClick={handleClick} />
                <NumberButton id="5" value="5" onClick={handleClick} />
                <NumberButton id="6" value="6" onClick={handleClick} />
                <NumberButton id="7" value="7" onClick={handleClick} />
                <NumberButton id="8" value="8" onClick={handleClick} />
                <NumberButton id="9" value="9" onClick={handleClick} />
                <NumberButton id="0" value="0" onClick={handleClick} />
                <NumberButton id="00" value="00" onClick={handleClick} />
                <NumberButton id='.' value='.' onClick={pointClick} />
            </div>
    )
}


export default Number