import React from "react";
import TipItem from "./TipItem";
import { tipsRates } from "../data";
const Tips = ({
    handleTips,
    tips,
    open,
    setOpen,
    id,
    setId,
    error,
    peopleError,
    handleCustomeTips,
}) => {
    const handleClick = (id, value) => {
        if (error === 1 && peopleError == 1) {
            setId((cur) => (cur.id !== id ? id : null));
            handleTips(value);
            setOpen(false);
        }
    };
    return (
        <div className="tips">
            <div className="tips_header">Select tips %</div>
            <div>
                {tipsRates.map((tip) => (
                    <TipItem
                        key={tip.id}
                        tip={tip}
                        id={id}
                        handleClick={handleClick}
                    />
                ))}

                <div className="customeTip" onClick={handleCustomeTips}>
                    {open ? (
                        <input
                            type="number"
                            min={0}
                            value={tips}
                            onChange={(e) => handleTips(Number(e.target.value))}
                        />
                    ) : (
                        <button> Cutom</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tips;
