import React from "react";
import CarsData from "../../Models/car";
import Dashboard from "../../Hoc/dashboard";
import CarTable from "../../Components/Table/cars";
import UserData from "../../Models/user.json";
class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
  }

  componentDidMount() {
    let name = this.props.match.params.name;
    let user = UserData.find(item => {
      return item.name.toLowerCase() === name.toLowerCase();
    });
    for (let i = 0; i < user.cars.length; i++) {
      for (let j = 0; j < CarsData.length; j++) {
        if (user.cars[i].carId === CarsData[j].carId) {
          this.setState(prevState => ({
            cars: [...prevState.cars, CarsData[j]]
          }));
        }
      }
    }
  }

  render() {
    console.log(this.props.match);
    return (
      <div className="Cars">
        <CarTable data={this.state.cars} />
      </div>
    );
  }
}

export default Dashboard(Cars);
