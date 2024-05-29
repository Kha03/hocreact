import React from "react";
import PropTypes from "prop-types";

CusList.propTypes = {
  customerList: PropTypes.array,
};

function CusList(props) {
  const { customerList } = props;
  return (
    <div>
      <ul className="cus-list">
        {customerList.map((customer) => (
          <li key={customer.customerID}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CusList;
