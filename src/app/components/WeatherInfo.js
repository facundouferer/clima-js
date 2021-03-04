import React from 'react';


const WeatherInfo = props => {

    return (
        <div>
            {props.error &&
                <div className="alert alert-danger">
                    <p>NO escribió ninguna ciudad!</p>
                </div>
            }
            {props.ciudad ?
                <div className="card card-body mt-2 animated fadeInUp">
                    img
                    <h1>Temperatura</h1>
                    <img src="nombreimagen.jpg" alt="" />
                    <div className="row">
                        <div className="col-lg-4">
                            <h4>Actual</h4>
                            <h2>{props.temperatura} °C</h2>
                        </div>
                        <div className="col-lg-4">
                            <h4>Máxima</h4>
                            <h2>{props.temp_max} °C</h2>
                        </div>
                        <div className="col-lg-4">
                            <h4>Mínima</h4>
                            <h2>{props.temp_min} °C</h2>
                        </div>
                    </div>

                    <div className="alert alert-dismissible alert-success">
                        <h3>Humedad: <strong>{props.humedad}</strong> %</h3>                        
                        <h3>Presión: {props.presion} hPa</h3>
                        <h3>Viento: {props.viento} km/h</h3>
                    </div>
                </div>
                :
                <div>
                    {!props.error &&
                        <p>Escriba una ciudad</p>
                    }
                </div>
            }
        </div>
    )


};

export default WeatherInfo;