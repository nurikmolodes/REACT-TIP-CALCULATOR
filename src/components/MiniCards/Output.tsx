import React from "react";

type OutputProps = {
  tipAmount: number;
  people: number;
  total: number;
  resetEverything: () => void;
};

const Output: React.FC<OutputProps> = ({
  tipAmount,
  people,
  total,
  resetEverything,
}: OutputProps) => (
  <div className="outputs-section">
    <div className="tip-amount">
      <p>
        Tip Amount
        <br />
        <span>/ person</span>
      </p>
      <h2 id="tipAmount" data-testid='tipAmount'>${people > 0 ? (tipAmount / people).toFixed() : 0}</h2>
    </div>
    <div className="total">
      <p>
        Total
        <br />
        <span>/ person</span>
      </p>
      <h2 id="total" data-testid='total'>${total.toFixed()}</h2>
    </div>
    <button onClick={resetEverything} className="reset-btn" id="resetBtn">
      Reset
    </button>
  </div>
);

export default Output;
