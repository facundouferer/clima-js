import React, { Component } from 'react';
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';
import { KEY } from './key';

class App extends Component {

    state = {
        temperatura: '',
        ciudad: '',
        pais: '',
        temperatura: '',
        temp_max: '',
        temp_min: '',
        humedad: '',
        presion: '',
        viento: '',
        error: false
    };

    getWeather = async e => {
        e.preventDefault();
        const { ciudad } = e.target.elements;

        if (ciudad.value) {
            const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad.value}&appid=${KEY}&units=metric`;
            const respuesta = await fetch(API_URL);
            const datos = await respuesta.json();

            console.log(datos);

            this.setState(
                {
                    temperatura: datos.main.temp,
                    ciudad: datos.name,
                    pais: datos.sys.country,
                    temperatura: datos.main.temp,
                    temp_max: datos.main.temp_max,
                    temp_min: datos.main.temp_min,
                    humedad: datos.main.humidity,
                    presion: datos.main.pressure,
                    viento: datos.wind.speed,
                    error: false
                }
            );
        } else {
            this.setState({ error: true })
        }

    }

    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1>el clima en alguna ciudad</h1>
                        <WeatherForm getWeather={this.getWeather} />
                        <WeatherInfo {...this.state} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;