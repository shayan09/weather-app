import React from "react";

const Weather = props => (
    <div>
    {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
    {props.temperature && <p>Temperature: {props.temperature}°C</p>}
    {props.humidity && <p>Humidity: {props.humidity}</p>}
    {props.description && <p>Description: {props.description}</p>}
    {props.error && <p>{props.error}</p>}
    </div>
);

export default Weather;
//pure JS statements like if-else dont work in react so we cant hide labels initially using these
//&& ensures that only if the first condition is met will it render the paragraph
//we use stateless components in this file.
/*1. No need of class, use arrow function
2. get rid of this (works only with class) and render function
3. pass props as an argument, as it is not defined
4. Get rid of the return if only one div is being returned
*/
/*class Weather extends React.Component {
    render() {
        return(
            <div>
            {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
            {this.props.temperature && <p>Temperature(C): {this.props.temperature}</p>}
            {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
            {this.props.description && <p>Description: {this.props.description}</p>}
            {this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
};
*/
