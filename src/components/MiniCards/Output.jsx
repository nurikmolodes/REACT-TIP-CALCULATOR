import React from 'react'

const Output = ({ tipAmount, people, total, resetEverything, }) => {
    return (
        <div className="outputs-section">
            <div className="tip-amount">
                <p>Tip Amount<br /><span>/ person</span></p>
                <h2 id="tipAmount">${parseInt(tipAmount / (people)) || 0}</h2>
            </div>
            <div className="total">
                <p>Total<br /><span>/ person</span></p>
                <h2 id="total">${parseInt(total / people) || 0}</h2>
            </div>
            <button onClick={resetEverything} class="reset-btn" id="resetBtn">Reset</button>
        </div>
    )
}

export default Output