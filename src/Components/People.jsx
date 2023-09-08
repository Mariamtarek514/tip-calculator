import React from "react";
import user from "../assets/icon-person.svg";
const People = ({
    numOfPeople,
    setNumOfPeople,
    peopleRef,
    Class,
    error,
    handleBlur,
}) => {
    return (
        <div className="people">
            <div className="d-flex justify-content-between">
                <label htmlFor="numbOfPeople">Number of people</label>
                {error && <span className="feadback">can't be zero</span>}
            </div>
            <div className={`input-group ${Class}`}>
                <figure className="icon">
                    <img src={user} alt="dolar icon" />
                </figure>
                <input
                    ref={peopleRef}
                    type="number"
                    min={0}
                    id="numbOfPeople"
                    value={numOfPeople}
                    onBlur={handleBlur}
                    onChange={(e) => setNumOfPeople(Number(e.target.value))}
                />
            </div>
        </div>
    );
};

export default People;
