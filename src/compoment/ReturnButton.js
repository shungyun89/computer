



const ReturnButton = (props) => {

    const {setnum,num} = props

    const clearClick = () => {
        setnum("")
    }
    const backClick = () => {
        setnum(num.slice(0, -1))
    }
    const calculate = () => {
        setnum(parseFloat(eval(num)).toPrecision().toString())
    }
    return (
        <>
            <div className="ac-button" onClick={clearClick}>AC</div>
            <div className="ac-button" onClick={backClick}>‣</div>
            <div className="ac-button-equal" onClick={calculate}>=</div>
        </>
    )
}


export default ReturnButton