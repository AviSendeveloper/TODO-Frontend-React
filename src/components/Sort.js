import React from "react";

const Sort = () => {
    return (
        <React.Fragment>
            <p className="small mb-0 ms-4 me-2 text-muted">Sort</p>
            <select className="select">
                <option value="1">Added date</option>
                <option value="2">Due date</option>
            </select>
            <a
                href="#!"
                style={{ color: "#23af89" }}
                data-mdb-toggle="tooltip"
                title="Ascending">
                <i className="fas fa-sort-amount-down-alt ms-2"></i>
            </a>
        </React.Fragment>
    );
};

export default Sort;
