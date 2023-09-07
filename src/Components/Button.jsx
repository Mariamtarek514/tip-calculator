import React from "react";

const Button = ({ children, onClick }) => {
    return (
        <button className="reset" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
