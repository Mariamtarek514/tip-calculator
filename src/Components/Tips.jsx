import React, { useRef, useState } from "react";

const Tips = ({
    handleTips,
    tips,
    open,
    id,
    handleCustome,
    handleCustomeTips,
}) => {
    const cusomRef = useRef(null);

    return (
        <div className="tips">
            <div className="tips_header">Select tips %</div>

            <div>
                <button
                    className={id === 5 ? "active" : ""}
                    onClick={() => handleCustome(5)}
                >
                    5%
                </button>
                <button
                    className={id === 10 ? "active" : ""}
                    onClick={() => handleCustome(10)}
                >
                    10%
                </button>
                <button
                    className={id === 15 ? "active" : ""}
                    onClick={() => handleCustome(15)}
                >
                    15%
                </button>
                <button
                    className={id === 25 ? "active" : ""}
                    onClick={() => handleCustome(25)}
                >
                    25%
                </button>
                <button
                    className={id === 50 ? "active" : ""}
                    onClick={() => handleCustome(50)}
                >
                    50%
                </button>
                <div className="customeTip" onClick={handleCustomeTips}>
                    {open ? (
                        <input
                            type="number"
                            min={0}
                            ref={cusomRef}
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
