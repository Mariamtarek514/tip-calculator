import React from "react";
import user from "../assets/icon-person.svg";
const People = ({
    numOfPeople,
    setNumOfPeople,
    peopleRef,
    Class,
    setCalss,
}) => {
    const handleBlur = () => {
        numOfPeople !== 0 ? setCalss("green") : setCalss("red");
    };
    return (
        <div className="people">
            <div className="d-flex justify-content-between">
                <label htmlFor="bill">Number of people</label>
                {(!numOfPeople || numOfPeople === 0) && (
                    <span className="feadback">can't be zero</span>
                )}
            </div>
            <div className={`input-group ${Class}`}>
                <figure className="icon">
                    <img src={user} alt="dolar icon" />
                </figure>
                <input
                    ref={peopleRef}
                    type="number"
                    min={0}
                    value={numOfPeople}
                    onBlur={handleBlur}
                    onChange={(e) => setNumOfPeople(Number(e.target.value))}
                />
            </div>
        </div>
    );
};

export default People;
