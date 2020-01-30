import React from 'react';
import CarsData from '../../Models/car';
import Dashboard from '../../Hoc/dashboard';
class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [...CarsData]
        };
    }
    render() {
        console.log(this.state.cars)
        return (
            <div className="Cars">
                <ul>
                {
                        this.state.cars.map(car => (
                            <li key={car.carId}>
                                {car.model}
                            </li>
                        ))
                    }         
                </ul>
            </div>
        );
    }
}

export default  Dashboard(Cars);