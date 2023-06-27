import React from "react";
import moment from "moment";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import DateBlock from "./dateBlock";
import makeUrl from "../util/makeUrl";

const List = (props) => {
    const deleteHandler = async (id) => {
        const response = await axios.post(makeUrl("/task/delete"), {
            id: id,
        });

        if (response.status) {
            props.onDelete(id);
        }
    };

    return (
        <React.Fragment>
            <ul className="list-group list-group-horizontal rounded-0">
                <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                    <div className="form-check">
                        <input
                            className="form-check-input me-0"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked2"
                            aria-label="..."
                        />
                    </div>
                </li>
                <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                    <p className="lead fw-normal mb-0">{props.task.title}</p>
                </li>

                {(props.task.dueDate !== undefined && props.task.dueDate !== null) && (
                    <DateBlock date={props.task.dueDate} />
                )}

                <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                    <div className="d-flex flex-row justify-content-end mb-1">
                        <a
                            href="#!"
                            className="text-info"
                            data-mdb-toggle="tooltip"
                            title="Edit todo">
                            <AiFillEdit />
                        </a>
                        <a
                            href="#!"
                            className="text-danger"
                            data-mdb-toggle="tooltip"
                            title="Delete todo"
                            onClick={() => {
                                deleteHandler(props.task._id);
                            }}>
                            <MdDelete />
                        </a>
                    </div>
                    <div className="text-end text-muted">
                        <a
                            href="#!"
                            className="text-muted"
                            data-mdb-toggle="tooltip"
                            title="Created date">
                            <p className="small mb-0">
                                <i className="fas fa-info-circle me-2"></i>
                                {moment(props.task.createdAt).format(
                                    "Do MMM YYYY"
                                )}
                            </p>
                        </a>
                    </div>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default List;
