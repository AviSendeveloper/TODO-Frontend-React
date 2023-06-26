import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import MainLayout from "./components/UI/MainLayout";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const App = () => {
    return (
        <MainLayout>
            <div className="card-body py-4 px-4 px-md-5">
                <Header />

                <Form />

                <hr className="my-4" />

                <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                    <Filter />

                    <Sort />
                </div>

                <List />
                <List />
                <List />
            </div>
        </MainLayout>
    );
};

export default App;
