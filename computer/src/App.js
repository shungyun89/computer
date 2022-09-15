import './computer.scss'


function App() {
  return (
    <div>
        <div class="wrap">
            <div class="computer">
                <div class="screen">
                    <div class="formula">
                        12+12
                    </div>
                    <div class="ans">
                        123456789
                    </div>
                </div>
                <div class="center-button">
                    <div class="number-button-body">
                        <div class="number-button">1</div>
                        <div class="number-button">2</div>
                        <div class="number-button">3</div>
                        <div class="number-button">4</div>
                        <div class="number-button">5</div>
                        <div class="number-button">6</div>
                        <div class="number-button">7</div>
                        <div class="number-button">8</div>
                        <div class="number-button">9</div>
                        <div class="number-button">0</div>
                        <div class="number-button">00</div>
                        <div class="number-button">.</div>

                    </div>
                    <div class="operation-button-body">
                        <div class="operation-button">+</div>
                        <div class="operation-button">-</div>
                        <div class="operation-button">*</div>
                        <div class="operation-button">/</div>
                    </div>
                </div>
                <div class="ac-body">
                    <div class="ac-button">AC</div>
                    <div class="ac-button">=></div>
                    <div class="ac-button-equal">=</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
