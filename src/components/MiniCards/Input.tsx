import React from 'react'
import iconDollar from '../../assets/icon-dollar.svg';
import iconPerson from '../../assets/icon-person.svg'

interface InputProps {
    bill: number,
    percentages: object[],
    custom: number,
    people: number,
    handlePeople: (event: React.ChangeEvent<HTMLInputElement>) => void,
    setBill: () => void,
    isSelected: boolean,
    handleSelect: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleCustom: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input: React.FC<InputProps> = ({ bill, percentages, custom, people, handlePeople, setBill, isSelected, handleSelect, handleCustom }) => {
    return (
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
                        <input value={custom} onChange={(e) => handleCustom(e)} type="number" placeholder="Custom" id="custom" />
                    </div>
                </div>
            </div>
            <div className="people-sec">
                <label for="people">Number of People</label>
                <span>{people == 0 && "Can't be zero"}</span>
                <div className="people-input">
                    <input style={people == 0 ? { outlineColor: 'red' } : null} value={people} onChange={(e) => handlePeople(e)} type="number" placeholder="0" id="people" />
                    <img src={iconPerson} alt="person" />
                </div>
            </div>
        </div>
    )
}

export default Input