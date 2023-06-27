import React from "react";
import moment from 'moment';

const List = (props) => {
    return (
        <React.Fragment>
            <li className="list-group-item px-3 py-1 d-flex align-items-center border-0 bg-transparent">
                <div className="py-2 px-3 me-2 border border-warning rounded-3 d-flex align-items-center bg-light">
                    <p className="small mb-0">
                        <a
                            href="#!"
                            data-mdb-toggle="tooltip"
                            title="Due on date"
                        >
                            <i className="fas fa-hourglass-half me-2 text-warning"></i>
                        </a>
                        {moment(props.date).format('Do MMM YYYY')}
                    </p>
                </div>
            </li>
        </React.Fragment>
    );
};

export default List;
