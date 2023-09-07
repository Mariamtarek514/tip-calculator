import React from "react";
import Button from "./Button";

const Result = ({ bill, numOfPeople, tips, handleReset }) => {
    const tipAmount =
        bill !== 0 && tips !== 0 && numOfPeople !== 0
            ? Math.round((bill * tips) / numOfPeople) / 100
            : "0.00";
    const totalPerPerson =
        bill !== 0 && tips !== 0 && numOfPeople !== 0
            ? (bill / numOfPeople + tipAmount).toFixed(2)
            : "0:00";
    return (
        <div className="result">
            <div className="result_content">
                <div className="tip-amount">
                    <div className="tip-details">
                        tip Amount
                        <br />
                        <span>/person</span>
                    </div>
                    <div className="amount">${tipAmount}</div>
                </div>
                <div className="tip-amount">
                    <div className="tip-details">
                        total
                        <br />
                        <span>/person</span>
                    </div>
                    <div className="amount">${totalPerPerson}</div>
                </div>
            </div>
            <Button onClick={handleReset}>Reset</Button>
        </div>
    );
};

export default Result;
