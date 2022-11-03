

const ReturnButton = (props) => {

    const {setnum, num, newarr, setnewarr, setanswer } = props

    
    const clearClick = () => {
        setnewarr([])
        setnum("")
        setanswer("")
    }
    const backClick = () => {
        setnum(num.slice(0, -1))
        setanswer(num.slice(0, -1))
    }
    const calculate = (e) => {
        if(newarr.length === 0){
            
        }else {
            switch (newarr[1]) {
                case '+':
                    if (num === '') {
                        setnum(0)
                        setanswer(0)
                    }
                    setnewarr(newarr => [Number(parseFloat(Number(newarr[0]) + Number(num)).toPrecision(12)),'+'])
                    setnum('')
                    setanswer(Number(parseFloat(Number(newarr[0]) + Number(num)).toPrecision(12)))
                    break;
                case '-':
                    if (num === '') {
                        setnum(0)
                        setanswer(0)
                    }
                    setnewarr(newarr => [Number(parseFloat(Number(newarr[0]) - Number(num)).toPrecision(12)),'-'])
                    setnum('')
                    setanswer(Number(parseFloat(Number(newarr[0]) - Number(num)).toPrecision(12)))
                    break;
                case '*':
                    if (num === '') {
                        setnum(1)
                        setanswer(1)
                    }
                    setnewarr(newarr => [Number(parseFloat(Number(newarr[0]) * Number(num)).toPrecision(12)),'*'])
                    setnum('')
                    setanswer(Number(parseFloat(Number(newarr[0]) * Number(num)).toPrecision(12)))
                    break;
                case '/':
                    if (num === '') {
                        setnum(1)
                        setanswer(1)
                    }
                    setnewarr(newarr => [Number(parseFloat(Number(newarr[0]) / Number(num)).toPrecision(12)),'/'])
                    setnum('')
                    setanswer(Number(parseFloat(Number(newarr[0]) / Number(num)).toPrecision(12)))
                    break;          
                default:
                    break;
            }
        }
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