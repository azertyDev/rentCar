import React from "react";
import { css } from "@emotion/core";
// First way to import
import { ClockLoader } from "react-spinners";
// Another way to import. This is recommended to reduce bundle size

 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  height:'70vh'
`;
 
class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
 
  render() {
    return (
      <div className="sweet-loading" style={{height:'70vh', display:'flex', alignItems:'center'}}>
        <ClockLoader
          css={override}
          size={100}
          //size={"150px"} this also works
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Spinner;