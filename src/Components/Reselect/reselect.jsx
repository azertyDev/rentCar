import React from "react";
import Select from "react-select";

class ReselectComponent extends React.Component {

  handleChange = selectedOption => {
    this.props.handleSelect(selectedOption);
  };
  render() {
    return (
      <Select
        value={this.props.selected || []}
        onChange={this.handleChange}
        options={this.props.normalCarData}
        isMulti
      />
    );
  }
}

export default ReselectComponent;
