import React from "react";
import Select from "react-select";

class ReselectComponent extends React.Component {
  state = {
    selectedOption: this.props.selectArray || [],
  };
  componentDidUpdate(preProps){
    if(preProps.selectArray !== this.props.selectArray){
      this.setState({
        selectedOption:this.props.selectArray
      })
    }
  }
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.handleSelect(selectedOption);
  };
  render() {
    return (
      <Select
        value={this.state.selectedOption || []}
        onChange={this.handleChange}
        options={this.props.normalCarData}
        isMulti
        name="select"
      />
    );
  }
}

export default ReselectComponent;
