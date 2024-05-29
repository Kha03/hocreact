import React from "react";
import { useState, useEffect } from "react";
import CusList from "./components/CusList";

function Customer(props) {
  const [customerList, setCustomerList] = useState([]);
  useEffect(() => {
    async function fectCustomerList() {
      const requestUrl = "http://localhost:8080/customer/get_customer";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      console.log({ responseJSON });
      setCustomerList(responseJSON);
    }
    fectCustomerList();
  }, []);

  return (
    <div>
      <CusList customerList={customerList} />
    </div>
  );
}

export default Customer;
