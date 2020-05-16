import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reactToWebComponent from "react-to-webcomponent";


// Render React directly
// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );


const Apps = reactToWebComponent(App, React, ReactDOM);

customElements.define("web-app", Apps);