import { useState } from 'react'
import './App.css'
import iconDollar from '../src/assets/icon-dollar.svg';
import iconPerson from '../src/assets/icon-person.svg'

function App() {

  // ALL THE STATES 
  const [bill, setBill] = useState(null);
  const [people, setPeople] = useState(1)
  const [custom, setCustom] = useState('Custom')
  const [selected, setSelected] = useState(0);
  const [isSelected, setIsSelected] = useState(null)
  const [percentages, setPercentages] = useState([
    {
      id: 1,
      percentage: 5,
      isSelected: false
    },
    {
      id: 2,
      percentage: 10,
      isSelected: false
    },
    {
      id: 3,
      percentage: 15,
      isSelected: false
    },
    {
      id: 4,
      percentage: 25,
      isSelected: false
    },
    {
      id: 5,
      percentage: 50,
      isSelected: false
    },
  ]);

  // FUNCTIONS 
  const resetEverything = () => {
    setSelected(0)
    setBill(0)
    setPeople(1)
    setCustom(0)
  }

  const handleCustom = (value) => {
    setCustom(value)
    setSelected(value)
    setIsSelected(null)
  }
  const handlePeople = (value) => {
    const min = 1
    const validation = Math.max(min, Number(value))
    setPeople(validation)
  }
  const handleSelect = (item, e) => {
    setIsSelected(item);
    setCustom('Custom')
    setSelected(item.percentage);
  }

  // CALCULATONS 
  const tipAmount = (bill * (selected / 100))
  const total = parseInt(Number(bill) + Number(tipAmount))

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
                <input value={bill} onChange={(e) => setBill(e.target.value)} type="number" placeholder="0" id="bill" />
                <img src={iconDollar} alt="person" />
              </div>
            </div>
            <div className="tip-sec">
              <label for="tip">Select Tip %</label>
              <div className='tip-btns'>
                <div className='tip-btn'>
                  {percentages.map((item, i) => {
                    return (
                      <button className={`${isSelected === item ? "isSelected" : null}`} key={item.id} onClick={(e) => handleSelect(item, e)}>{item.percentage}%</button>
                    )
                  })}
                  <input value={custom} onChange={(e) => handleCustom(e.target.value)} type="number" placeholder="Custom" id="custom" />
                </div>
              </div>
            </div>
            <div class="people-sec">
              <label for="people">Number of People</label>
              <div className="people-input">
                <input value={people} onChange={(e) => handlePeople(e.target.value)} type="number" placeholder="0" id="people" />
                <img src={iconPerson} alt="person" />
              </div>
            </div>
          </div>
          <div className="outputs-section">
            <div className="tip-amount">
              <p>Tip Amount<br /><span>/ person</span></p>
              <h2 id="tipAmount">${parseInt(tipAmount / (people))}</h2>
            </div>
            <div className="total">
              <p>Total<br /><span>/ person</span></p>
              <h2 id="total">${parseInt(total / people)}</h2>
            </div>
            <button onClick={resetEverything} class="reset-btn" id="resetBtn">Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
