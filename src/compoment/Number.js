import NumberButton from "./NumberButton"
// import { useState } from "react"


const Number = (props) =>  {

    const {setnum,num} = props
    
    const handleClick = (e) => {
        setnum(num.concat(e.target.id))
    }

    return(
            <div className="number-button-body">
                <NumberButton id="1" value="1" onClick={handleClick} />
                <NumberButton id="2" value="2" onClick={handleClick}/>
                <NumberButton id="3" value="3" onClick={handleClick}/>
                <NumberButton id="4" value="4" onClick={handleClick}/>
                <NumberButton id="5" value="5" onClick={handleClick}/>
                <NumberButton id="6" value="6" onClick={handleClick}/>
                <NumberButton id="7" value="7" onClick={handleClick}/>
                <NumberButton id="8" value="8" onClick={handleClick}/>
                <NumberButton id="9" value="9" onClick={handleClick}/>
                <NumberButton id="0" value="0" onClick={handleClick}/>
                <NumberButton id="00" value="00" onClick={num===0?console.log():handleClick}/>
                <NumberButton id='.' value='.' onClick={handleClick} />
            </div>
    )
}


export default Number