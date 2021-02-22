import React from 'react'

const WeatherForm = (props) => {

    return(
        <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="ciudad" placeholder="Ciudad" className="form-control" autoFocus></input>
            </div>
            <button className="btn btn-primary btn-block">ver clima</button>
        </form>
    </div>
    );
}

export default WeatherForm;