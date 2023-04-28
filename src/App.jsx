import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2 class="title">
        spli <br />
        tter
      </h2>
      <div class="card">
        <div class="card-container">
          <div class="inputs-section">
            <div class="bill-sec">
              <label for="bill">Bill</label>
              <div class="bill-input">
                <input type="text" placeholder="0" id="bill" />
                <img src="./src/assets/icon-dollar.svg" alt="person" />
              </div>
            </div>
            <div class="tip-sec">
              <label for="tip">Select Tip %</label>
              <div class="tip-btns">
                <div>
                  <button>5%</button>
                  <button>10%</button>
                  <button>15%</button>
                </div>
                <div>
                  <button>25%</button>
                  <button>50%</button>
                  <input type="number" placeholder="Custom" id="custom" />
                </div>
              </div>
            </div>
            <div class="people-sec">
              <label for="people">Number of People</label>
              <div class="people-input">
                <input type="text" placeholder="0" id="people" />
                <img src="./src/assets/icon-person.svg" alt="person" />
              </div>
            </div>
          </div>
          <div class="outputs-section">
            <div class="tip-amount">
              <p>Tip Amount<br /><span>/ person</span></p>
              <h2 id="tipAmount">$0.00</h2>
            </div>
            <div class="total">
              <p>Total<br /><span>/ person</span></p>
              <h2 id="total">$0.00</h2>
            </div>
            <button class="reset-btn" id="resetBtn">Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
