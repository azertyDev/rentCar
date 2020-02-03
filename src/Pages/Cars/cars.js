import React from 'react';
import CarsData from '../../Models/car';
import Dashboard from '../../Hoc/dashboard';
import CarTable from '../../Components/Table/cars';

class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [...CarsData]
        };
    }
    render() {
        console.log(this.state.cars);
        return (
            <div className="Cars">
                <CarTable data={this.state.cars}/>
            </div>
        );
    }
}

export default  Dashboard(Cars);