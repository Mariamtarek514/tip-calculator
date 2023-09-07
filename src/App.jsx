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
    const handleSubmit = (e) => {
        e.preventDefault();
        bill === 0 ? setBillCalss("red") : setBillCalss("green");
        numOfPeople === 0 ? setPeopleClass("red") : setPeopleClass("green");
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
                        setCalss={setBillCalss}
                    />
                    <Tips
                        handleTips={handleTips}
                        tips={tips}
                        numOfPeople={numOfPeople}
                        peopleRef={peopleRef}
                        billRef={billRef}
                        bill={bill}
                        open={open}
                        setOpen={setOpen}
                        id={id}
                        setId={setId}
                    />
                    <People
                        numOfPeople={numOfPeople}
                        setNumOfPeople={setNumOfPeople}
                        peopleRef={peopleRef}
                        Class={peopleClass}
                        setCalss={setPeopleClass}
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
