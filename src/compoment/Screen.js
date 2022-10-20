


const Screen = (props) => {

const {setnum, num, newarr, answer} = props


    
    return (
        <>
            <div className="formula">
                {newarr}
            </div>
            <div className="ans">
            {answer}
            </div>
        </>
    )
}


export default Screen