import React from 'react'
import { useState } from 'react'
import Input from './MiniCards/Input';
import Output from './MiniCards/Output';

const Card: React.FC = () => {
    // ALL THE STATES 
    const [bill, setBill] = useState<number>(0);
    const [people, setPeople] = useState<number>(1)
    const [custom, setCustom] = useState<any>(null)
    const [selected, setSelected] = useState<number>(0);
    const [isSelected, setIsSelected] = useState<boolean>(false)
    const [percentages, setPercentages] = useState<object[]>([
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

    const handleCustom = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustom(e.target.value)
        setSelected(e.target.value)
        setIsSelected(null)
    }
    const handlePeople = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPeople(e.target.value)
    }
    const handleSelect = (item, e) => {
        setIsSelected(item);
        setCustom('')
        setSelected(item.percentage);
    }

    // CALCULATONS 
    const tipAmount: number = (bill * (selected / 100))
    const total: number = parseInt(Number(bill) + Number(tipAmount))
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