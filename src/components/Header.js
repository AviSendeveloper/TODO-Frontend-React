import React from "react";

const Header = () => {
    return (
        <React.Fragment>
            <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                <i className="fas fa-check-square me-1"></i>
                <u>My Todo-s</u>
            </p>
        </React.Fragment>
    );
};

export default Header;
