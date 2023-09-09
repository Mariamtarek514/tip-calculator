import React, { useRef, useState } from "react";
import Tips from "./Components/Tips";
import Result from "./Components/Result";
import Logo from "./assets/logo.svg";
import Input from "./Components/Input";
import dollarIcon from "./assets/icon-dollar.svg";
import people from "./assets/icon-person.svg";
const App = () => {
    const [bill, setBill] = useState(0);
    const [numOfPeople, setNumOfPeople] = useState(0);
    const [tips, setTips] = useState(0);
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(2);
    const [peopleError, setPeopleError] = useState(2);
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

    const handleCustomeTips = () => {
        if (bill !== 0 && numOfPeople !== 0) {
            setOpen(true);
            handleTips(0);
        }
    };
    const handlePeopleBlur = () => {
        if (numOfPeople === 0) {
            setPeopleError(0);
            peopleRef.current.focus();
        } else {
            setPeopleError(1);
        }
    };
    const handleBillBlur = () => {
        if (bill === 0) {
            setError(0);

            billRef.current.focus();
        } else {
            setError(1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleBillBlur();
        handlePeopleBlur();
    };
    return (
        <div className="container">
            <img src={Logo} alt="logo" className="mb-5" />
            <div className="content">
                <form action="" onSubmit={handleSubmit}>
                    <Input
                        name="bill"
                        image={dollarIcon}
                        input={bill}
                        setInput={setBill}
                        inputRef={billRef}
                        handleBlur={handleBillBlur}
                        error={error}
                    />

                    <Tips
                        handleTips={handleTips}
                        tips={tips}
                        open={open}
                        setOpen={setOpen}
                        id={id}
                        setId={setId}
                        error={error}
                        peopleError={peopleError}
                        handleCustomeTips={handleCustomeTips}
                    />
                    <Input
                        name="number of people"
                        image={people}
                        input={numOfPeople}
                        setInput={setNumOfPeople}
                        inputRef={peopleRef}
                        handleBlur={handlePeopleBlur}
                        error={peopleError}
                    >
                        {peopleError === 0 && (
                            <span className="feadback">can't be zero</span>
                        )}
                    </Input>
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
