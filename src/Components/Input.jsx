import React from "react";

const Input = ({
    name,
    image,
    input,
    setInput,
    inputRef,
    handleBlur,
    error,
    children,
}) => {
    return (
        <div className="input_container">
            <div className="d-flex justify-content-between">
                <label htmlFor={name}>{name}</label>
                {children}
            </div>
            <div
                className={`input-group ${
                    error === 0 ? "red" : error === 1 ? "green" : null
                }`}
            >
                <figure className="icon">
                    <img src={image} alt="icon" />
                </figure>
                <input
                    type="number"
                    value={input}
                    ref={inputRef}
                    setp="any"
                    id={name}
                    onBlur={handleBlur}
                    onChange={(e) => setInput(Number(e.target.value))}
                />
            </div>
        </div>
    );
};

export default Input;
