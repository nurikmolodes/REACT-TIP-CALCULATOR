import React from 'react'
import { useState } from 'react'
import Input from './MiniCards/Input';
import Output from './MiniCards/Output';

const Card = () => {
    // ALL THE STATES 
    const [bill, setBill] = useState(null);
    const [people, setPeople] = useState(null)
    const [custom, setCustom] = useState(null)
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
        setPeople(value)
    }
    const handleSelect = (item, e) => {
        setIsSelected(item);
        setCustom('')
        setSelected(item.percentage);
    }

    // CALCULATONS 
    const tipAmount = (bill * (selected / 100))
    const total = parseInt(Number(bill) + Number(tipAmount))
    return (
        <div>
            <h2 className="title">
                spli <br />
                tter
            </h2>
            <div className="card">
                <div className="card-container">
                    <Input bill={bill} custom={custom} handlePeople={handlePeople} handleSelect={handleSelect} isSelected={isSelected} people={people} percentages={percentages} setBill={setBill} handleCustom={handleCustom} />
                    <Output people={people} resetEverything={resetEverything} tipAmount={tipAmount} total={total} />
                </div>
            </div>
        </div>
    )
}

export default Card