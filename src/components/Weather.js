import React from "react";

const Weather = props => (
    <div className="weather__info">
    {
        props.city && props.country && <p className="weather__key">Location:
        <span className="weather__value"> {props.city}, {props.country}</span>
        </p>
    }
    {
        props.temperature && <p className="weather__key">Temperature:
        <span className="weather__value"> {props.temperature}°C</span>
        </p>
    }
    {
        props.humidity && <p className="weather__key">Humidity:
        <span className="weather__value"> {props.humidity}</span>
        </p>
    }
    {
        props.description && <p className="weather__key">Description:
        <span className="weather__value"> {props.description}</span>
        </p>
    }
    {
        props.error && <p className="weather__key">
        <span className="weather__value"> {props.error}</span>
        </p>
    }
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
