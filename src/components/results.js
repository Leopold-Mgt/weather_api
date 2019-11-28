import React from 'react';
import '../style.css';

export default class Results extends React.Component {

    render() {
        if (this.props.data.humidity !== undefined) {
        return (
            <div className="render">
                <p className="location">{this.props.data.city}</p>
                <p className="temperature">{this.props.data.temp}°</p>
                <p className="minmax"><p>{this.props.data.temp_min}°</p> | <p>{this.props.data.temp_max}°</p></p>
                <p className="description">{this.props.data.description}</p>
                <p className="humidity">Humidity : {this.props.data.humidity}</p>
                <p className="pressure">Pressure : {this.props.data.pressure}</p>
            </div>
        );
        } else {
            return false;
        }
    }
}
