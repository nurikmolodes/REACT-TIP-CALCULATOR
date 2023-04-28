import { useState } from 'react'
import './App.css'
import iconDollar from '../src/assets/icon-dollar.svg';
import iconPerson from '../src/assets/icon-person.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2 className="title">
        spli <br />
        tter
      </h2>
      <div className="card">
        <div className="card-container">
          <div className="inputs-section">
            <div className="bill-sec">
              <label for="bill">Bill</label>
              <div className="bill-input">
                <input type="text" placeholder="0" id="bill" />
                <img src={iconDollar} alt="person" />
              </div>
            </div>
            <div className="tip-sec">
              <label for="tip">Select Tip %</label>
              <div className="tip-btns">
                <div className='tip-btn'>
                  <button>5%</button>
                  <button>10%</button>
                  <button>15%</button>
                </div>
                <div className='tip-btn'>
                  <button>25%</button>
                  <button>50%</button>
                  <input type="number" placeholder="Custom" id="custom" />
                </div>
              </div>
            </div>
            <div class="people-sec">
              <label for="people">Number of People</label>
              <div className="people-input">
                <input type="text" placeholder="0" id="people" />
                <img src={iconPerson} alt="person" />
              </div>
            </div>
          </div>
          <div className="outputs-section">
            <div className="tip-amount">
              <p>Tip Amount<br /><span>/ person</span></p>
              <h2 id="tipAmount">$0.00</h2>
            </div>
            <div className="total">
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
