



const ReturnButton = (props) => {

    const {setnum, num, newarr, setnewarr} = props


    const clearClick = () => {
        setnewarr([])
        setnum("")
    }
    const backClick = () => {
        setnum(num.slice(0, -1))
    }
    const calculate = () => {
        // setnewarr(Number(parseFloat(eval(num)).toPrecision().toString()))
        // console.log(newarr);
        // if(newarr[1] ==='+'){
        //     console.log(newarr);
        //     setnewarr(Number(parseFloat(newarr[0]+num).toPrecision(12)))
        //     console.log(newarr);
        // }
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