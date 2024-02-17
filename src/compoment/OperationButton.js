const OperationButton = (props) => {
    const { setnum, num, newarr, setnewarr, setanswer } = props;
  
    const performOperation = (operator, a, b) => {
      switch (operator) {
        case "+":
          return a + b;
        case "-":
          return a - b;
        case "*":
          return a * b;
        case "/":
          return a / b;
        default:
          throw new Error(`Unknown operator: ${operator}`);
      }
    };
  
    const handleOperationClick = (e) => {
      const operator = e.target.id;
  
      if (newarr.length === 0) {
        setnewarr([num, operator]);
        setnum("");
        setanswer("");
      } else {
        const [prevValue, prevOperator] = newarr;
        const currentValue = num ? Number(num) : 0;
  
        const newValue = performOperation(prevOperator, Number(prevValue), currentValue);
        setnewarr([newValue, operator]);
        setnum("");
        setanswer(newValue);
      }
    };
  
    return (
      <div className="operation-button-body">
        <div className="operation-button" id="+" onClick={handleOperationClick}>
          +
        </div>
        <div className="operation-button" id="-" onClick={handleOperationClick}>
          -
        </div>
        <div className="operation-button" id="*" onClick={handleOperationClick}>
          x
        </div>
        <div className="operation-button" id="/" onClick={handleOperationClick}>
          ÷
        </div>
        <div className="operation-button" id="=" onClick={handleOperationClick}>
          =
        </div>
      </div>
    );
  };
  
  export default OperationButton;