import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import MainLayout from "./components/UI/MainLayout";
import makeUrl from "./util/makeUrl";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const App = () => {
    let [taskList, setTaskList] = useState([]);

    const onCreateTaskHandler = (data) => {
        setTaskList((prevTask) => {
            return [data, ...prevTask];
        });
    };

    const fetchTaskList = async () => {
        const url = makeUrl("/task/list");
        const lists = await axios.get(url);
        return lists.data.data;
    };

    useEffect(() => {
        (async () => {
            const taskListData = await fetchTaskList();
            setTaskList(taskListData);
        })();
    }, []);

    return (
        <MainLayout>
            <div className="card-body py-4 px-4 px-md-5">
                <Header />

                <Form onCreateTask={onCreateTaskHandler} />

                <hr className="my-4" />

                <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                    <Filter />

                    <Sort />
                </div>

                {taskList.map((task) => {
                    return <List task={task} key={task._id}/>;
                })}
            </div>
        </MainLayout>
    );
};

export default App;
