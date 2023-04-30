import React from "react";
import iconDollar from "../../assets/icon-dollar.svg";
import iconPerson from "../../assets/icon-person.svg";

interface percentage {
  id: number;
  percentage: number;
  isSelected: boolean;
}

type InputProps = {
  bill: number | string;
  percentages: percentage[];
  custom: number | string;
  people: number | string;
  setPeople: any;
  setBill: any;
  isSelected: boolean | object;
  handleSelect: any;
  handleCustom: any;
};

const Input: React.FC<InputProps> = ({
  bill,
  percentages,
  custom,
  people,
  setPeople,
  setBill,
  isSelected,
  handleSelect,
  handleCustom,
}) => {
  return (
    <div className="inputs-section">
      <div className="bill-sec">
        <label>Bill</label>
        <div className="bill-input">
          <input
            value={bill == 0 ? "" : bill}
            onChange={(e) => setBill(e.target.value)}
            type="number"
            placeholder="0"
            id="bill"
          />
          <img src={iconDollar} alt="person" />
        </div>
      </div>
      <div className="tip-sec">
        <label>Select Tip %</label>
        <div className="tip-btns">
          <div className="tip-btn">
            {percentages.map((item) => {
              return (
                <button
                  className={`${isSelected === item ? "isSelected" : null}`}
                  key={item.id}
                  onClick={() => handleSelect(item)}
                >
                  {item.percentage}%
                </button>
              );
            })}
            <input
              value={custom == 0 ? "Custom" : custom}
              onChange={(e) => handleCustom(e)}
              type="number"
              placeholder="Custom"
              id="custom"
            />
          </div>
        </div>
      </div>
      <div className="people-sec">
        <label>Number of People</label>
        <span>{people == 0 && "Can't be zero"}</span>
        <div className="people-input">
          <input
            style={people == 0 ? { outlineColor: "red" } : undefined}
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            type="number"
            placeholder="0"
            id="people"
          />
          <img src={iconPerson} alt="person" />
        </div>
      </div>
    </div>
  );
};

export default Input;
