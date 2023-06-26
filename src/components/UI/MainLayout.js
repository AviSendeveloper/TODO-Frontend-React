import React from "react";

const MainLayout = (props) => {
    return (
        <React.Fragment>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div
                                className="card"
                                id="list1"
                                style={{
                                    borderRadius: ".75rem",
                                    backgroundColor: "#c5cfd3",  // eff1f2
                                }}>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default MainLayout;
