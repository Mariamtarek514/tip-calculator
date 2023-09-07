import React, { useRef, useState } from "react";

const Tips = ({
    handleTips,
    tips,
    numOfPeople,
    peopleRef,
    billRef,
    bill,
    open,
    setOpen,
    id,
    setId,
}) => {
    const cusomRef = useRef(null);

    const handleCustomeTips = () => {
        if (bill === 0) {
            billRef.current.focus();
        } else if (numOfPeople === 0) {
            peopleRef.current.focus();
        } else {
            setOpen(true);
            handleTips(0);
            setId(0);
            cusomRef.current && cusomRef.current.focus();
        }
    };
    const handleCustome = (value) => {
        setOpen(false);
        if (bill === 0) {
            billRef.current.focus();
        } else if (numOfPeople === 0) {
            peopleRef.current.focus();
        } else {
            handleTips(Number(value));
            setId(value);
        }
    };

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
