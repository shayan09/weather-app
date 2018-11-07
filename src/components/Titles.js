import React from "react";

const Titles = () => (
    <div>
        <h1 className="title-container__title">Weather Finder</h1>
        <p className="title-container__subtitle">Find out temperature, conditions and more..</p>
    </div>
);

export default Titles; //so that app.js can import it
/*class Titles extends React.Component {
    render() {
        return (
                <div>
                    <h1>Weather Finder</h1>
                    <p>Find out temperature, conditions and more..</p>
                </div>
        );
    }
};
*/
