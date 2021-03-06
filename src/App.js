//This file acts as a wrapper for all other files
import React from "react"; //importing from package.json
import Titles from "./components/Titles"; //at this point it is imported, but we need to render it to display
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "39caf123eab63455a52d97bcf1b5e8ba";

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    getWeather = async (e) => {
        e.preventDefault(); //prevent the default action of refreshing the page
        const city =  e.target.elements.city.value;
        const country =  e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`); //async await is used to make html calls
        const data = await api_call.json(); //need to convert to json for the browser to understand
        if(city && country) { //used to avoid breaking of application when clicked without input
            //console.log(data);//display in console to see location of properties while accessing states
            //this.state.temperature; never ever directly manipulate a state like this, bad practice!
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        }
        else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter the values"
            });
        }
    } //arrow key in version 16 so you dont need to bind this keyword in the constructor, can be used independently
    render() {
{/*creating a component; class creates an instance of app that extends React.Component(which lives in node_modules)*/}
{/*used to display; built in method inside React.Component and returns JSX(Babble converts it to JS that browsers can understand)*/}
        return(
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Titles />
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form getWeather={this.getWeather}/>
                                    <Weather
                                    temperature={this.state.temperature}
                                    city={this.state.city}
                                    country={this.state.country}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    error={this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default App; //need to export in order for other files to import this Component
//don't create the other components here as it kills the purpose of React that combines components from files
//displays it all together in a single index.html file
{/*use self closing html tags to display Components*/}
{/*JSX can return only one parent element. Everything has to be wrapped inside a <div>*/}
//giving access to the getWeather function to forms by setting up the prop and giving it a name getWeather
//Use Ctrl+E to expand emit commands, tab does not work
