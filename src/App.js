import React from "react";
import PropTypes from 'prop-types';


function App(props) {

  return (

    <div>
      <h4>Account Information</h4>
      <p><strong>Customer Name</strong> : {props.account.customerName}</p>
      <p><strong>Customer Ban</strong> : {props.account.customerBan}</p>
      <p><strong>Customer Email</strong> : {props.account.customerEmail}</p>
      <p><strong>Customer Address</strong> : {props.account.customerAddress}</p>      
    </div>

  );
}
App.propTypes = {
  account : PropTypes.any.isRequired
};

export default App;
