import React, { useRef, useState } from "react";
import Bill from "./Components/Bill";
import Tips from "./Components/Tips";
import People from "./Components/People";
import Result from "./Components/Result";
import Logo from "./assets/logo.svg";

const App = () => {
    const [bill, setBill] = useState(0);
    const [numOfPeople, setNumOfPeople] = useState(0);
    const [tips, setTips] = useState(0);
    const [open, setOpen] = useState(false);
    const [billClass, setBillCalss] = useState("");
    const [peopleClass, setPeopleClass] = useState("");
    const [error, setError] = useState(false);
    const [id, setId] = useState(0);
    const peopleRef = useRef(null);
    const billRef = useRef(null);
    const handleTips = (value) => {
        setTips(value);
    };
    const handleReset = () => {
        setBill(0);
        setNumOfPeople(0);
        setTips(0);
        setOpen(false);
        setId(0);
    };
    const handleCustome = (value) => {
        setOpen(false);
        if (bill !== 0 && numOfPeople !== 0) {
            handleTips(Number(value));
            setId(value);
        }
    };
    const handleCustomeTips = () => {
        if (bill !== 0 && numOfPeople !== 0) {
            setOpen(true);
            handleTips(0);
            setId(0);
            cusomRef.current && cusomRef.current.focus();
        }
    };
    const handleBlur = () => {
        if (numOfPeople === 0) {
            setPeopleClass("red");
            setError(true);
            peopleRef.current.focus();
        } else {
            setError(false);
            setPeopleClass("green");
        }
        if (bill === 0) {
            setBillCalss("red");
            billRef.current.focus();
        } else {
            setBillCalss("green");
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        handleBlur();
    };
    return (
        <div className="container">
            <img src={Logo} alt="logo" className="mb-5" />
            <div className="content">
                <form action="" onSubmit={handleSubmit}>
                    <Bill
                        bill={bill}
                        setBill={setBill}
                        billRef={billRef}
                        Class={billClass}
                        handleBlur={handleBlur}
                    />
                    <Tips
                        handleTips={handleTips}
                        tips={tips}
                        open={open}
                        id={id}
                        setError={setError}
                        handleCustome={handleCustome}
                        handleCustomeTips={handleCustomeTips}
                    />
                    <People
                        numOfPeople={numOfPeople}
                        setNumOfPeople={setNumOfPeople}
                        peopleRef={peopleRef}
                        Class={peopleClass}
                        error={error}
                        handleBlur={handleBlur}
                    />
                </form>
                <Result
                    bill={bill}
                    numOfPeople={numOfPeople}
                    tips={tips}
                    handleReset={handleReset}
                />
            </div>
        </div>
    );
};

export default App;
