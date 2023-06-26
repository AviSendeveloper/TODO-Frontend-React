import React from "react";

const Filter = () => {
    return (
        <React.Fragment>
            <p className="small mb-0 me-2 text-muted">Filter</p>
            <select className="select">
                <option value="1">All</option>
                <option value="2">Completed</option>
                <option value="3">Active</option>
                <option value="4">Has due date</option>
            </select>
        </React.Fragment>
    );
};

export default Filter;
