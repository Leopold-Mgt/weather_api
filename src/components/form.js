import React from 'react';
import '../style.css';

export default class Form extends React.Component {
    render() {
        return (
            <div className="App">
                <form onSubmit={this.props.getMeteo} autoComplete="off">
                    <div>
                        <label htmlFor="city"></label>
                        <input type="text" id="city" name="city" placeholder="City"/>
                    </div>
                    <div>
                        <label htmlFor="country"></label>
                        <input type="text" id="country" name="country" placeholder="Country (Acronym)"/>
                    </div>
                    <button className="submit" type="submit"/>
                </form>
            </div>
        );
    }
}
