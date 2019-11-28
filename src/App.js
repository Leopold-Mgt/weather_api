import React from 'react';
import './style.css';
import Form from './components/form';
import Results from './components/results';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            humidity: undefined,
            pressure : undefined,
            temp: undefined,
            temp_max: undefined,
            temp_min: undefined,
            description: undefined
        }
    }

    getMeteo = async (e) => {
        e.preventDefault();
        console.log("yes");
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const apiCall = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&APPID=db74cc4458dae7153535685de9d0642b');
        const data = await apiCall.json();

        this.setState({
            city: city,
            country: country,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            temp: Math.round((data.main.temp - 273.15)*100)/100,
            temp_max: Math.round(data.main.temp_max - 273.15),
            temp_min: Math.round(data.main.temp_min - 273.15),
            description: data.weather[0].description
        });
    };

    render() {
        return (
            <div className="App">
                <Form getMeteo={this.getMeteo}/>
                <Results data={this.state}/>
            </div>
        );
    }
}
