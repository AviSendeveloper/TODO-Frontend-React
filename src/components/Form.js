import React, { useState } from "react";
import axios from 'axios';
import makeUrl from "../util/makeUrl";

const Form = () => {
    const [userInput, setUserInput] = useState({
        title: "",
        date: "",
    });

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, title: event.target.value };
        });
    };

    const submitTask = async (event) => {
        const url = makeUrl('/task/create');
        console.log(url);
        const result = await axios.post(url, {
            title: userInput.title,
            date: userInput.date
        })
        .then(result => console.log('result: ', result))
        .catch(error => console.log('error: ', error));
        // console.log('result: ', result);
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
                                // href="#!"
                                // data-mdb-toggle="tooltip"
                                type="date"
                                title="Set due date" />
                                <i className="fas fa-calendar-alt fa-lg me-3"></i>
                            {/* </input> */}
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
