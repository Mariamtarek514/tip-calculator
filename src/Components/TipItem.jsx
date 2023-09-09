import React from "react";

const TipItem = ({ tip, handleClick, id }) => {
    return (
        <button
            onClick={() => handleClick(tip.id, tip.value)}
            className={id === tip.id ? "active" : null}
        >
            {tip.value}%
        </button>
    );
};

export default TipItem;
