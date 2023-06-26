import React, { useState } from "react";
import axios from 'axios';
import makeUrl from "../util/makeUrl";

const Form = (props) => {
    const [userInput, setUserInput] = useState({
        title: "",
        date: "",
    });

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, title: event.target.value };
        });
    };

    const selectDateHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, date: event.target.value };
        });
    }

    const submitTask = async (event) => {
        const url = makeUrl('/task/create');
        const result = await axios.post(url, {
            title: userInput.title,
            date: userInput.date
        });
        await props.onCreateTask(result.data.data);
    }

    return (
        <React.Fragment>
            <div className="pb-2">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex flex-row align-items-center">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                id="exampleFormControlInput1"
                                placeholder="Add new..."
                                value={userInput.title}
                                onChange={titleChangeHandler}
                            />
                            <input
                                type="date"
                                title="Set due date"
                                onChange={selectDateHandler}
                            />
                                <i className="fas fa-calendar-alt fa-lg me-3"></i>
                            <div>
                                <button type="button" className="btn btn-primary" onClick={submitTask}>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Form;
