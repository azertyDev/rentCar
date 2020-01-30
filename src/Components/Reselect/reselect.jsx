import React from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

class ReselectComponent extends React.Component {
  state = {
    selectedOption: [...this.props.selectArray]
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectArray !== this.props.selectArray) {
      this.setState({
        selectedOption: this.props.selectArray
      });
    }
  }
  handleChange = selectedOption => {
    this.props.handleSelect(selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
    console.log(selectedOption);
    return (
      <Select
        value={this.props.selected}
        onChange={this.handleChange}
        options={this.props.normalCarData}
        isMulti
      />
    );
  }
}

export default ReselectComponent;
