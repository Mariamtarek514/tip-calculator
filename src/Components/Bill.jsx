import React from "react";
import dollarIcon from "../assets/icon-dollar.svg";
const Bill = ({ bill, setBill, billRef, Class, handleBlur }) => {
    return (
        <div className="bill">
            <label htmlFor="bill">bill</label>
            <div className={`input-group ${Class}`}>
                <figure className="icon">
                    <img src={dollarIcon} alt="dolar icon" />
                </figure>
                <input
                    type="number"
                    value={bill}
                    ref={billRef}
                    min={0}
                    id="bill"
                    step="any"
                    onBlur={handleBlur}
                    onChange={(e) => setBill(Number(e.target.value))}
                />
            </div>
        </div>
    );
};

export default Bill;
