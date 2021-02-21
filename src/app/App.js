import React, {Component} from 'react';
import { container } from 'webpack';
import {WeatherInfo} from './components/WeatherInfo'

class App extends Component{
    render(){
        return(
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-6">
                        <WeatherInfo/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;