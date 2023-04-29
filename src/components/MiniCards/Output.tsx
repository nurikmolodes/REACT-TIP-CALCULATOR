import React from "react";

interface OutputProps {
  tipAmount: number;
  people: number;
  total: number;
  resetEverything: () => void;
}

const Output: React.FC<OutputProps> = ({
  tipAmount,
  people,
  total,
  resetEverything,
}: OutputProps) => {
  return (
    <div className="outputs-section">
      <div className="tip-amount">
        <p>
          Tip Amount
          <br />
          <span>/ person</span>
        </p>
        <h2 id="tipAmount">${parseInt(tipAmount / people) || 0}</h2>
      </div>
      <div className="total">
        <p>
          Total
          <br />
          <span>/ person</span>
        </p>
        <h2 id="total">${parseInt(total / people) || 0}</h2>
      </div>
      <button onClick={resetEverything} class="reset-btn" id="resetBtn">
        Reset
      </button>
    </div>
  );
};

export default Output;
