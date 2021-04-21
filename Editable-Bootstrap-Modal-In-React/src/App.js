import React, { Component } from 'react';
import List from "./components/list.js";
import SET from './pages.js/SummeryOfIncodedTickets/SET';

// Scripts
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends Component {
  render() {
    return (
      <div>
  <SET/>
      </div>
    );
  }
}

export default App;
