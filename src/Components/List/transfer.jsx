import React from "react";
import _ from "lodash";
import "../Css/list.css";
const Transfer = ({ normalizedData }) => {
  const { access, notAccess } = normalizedData;
  return (
    <div className="transfer_self">
      <div>
        {access.map((item, id) => {
          return <div key={id}>{item.content}</div>;
        })}
      </div>
      <div>
        {notAccess.map((item, id) => {
          return <div key={id}>{item.content}</div>;
        })}
      </div>
    </div>
  );
};

export default Transfer;
