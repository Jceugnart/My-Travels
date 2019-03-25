import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">My travel</h1>
        </header>
        <Travel
          destination = "South of Italy"
          country = "Italy"
          photo = "https://d34ftvyq1mhc1v.cloudfront.net/1683-WondersSouthItaly_Positano.jpg" alt="Italy"
          distance = "1649 km"
          />
          <Travel
          destination = "South of Spain"
          country = "Spain"
          photo = "https://www.les-voyageuses.net/wp-content/uploads/2019/01/les-voyageuses-vacances-en-espagne-tenerife-627x376.jpg" alt="Spain"
          distance = "1440 km"
          />
      </div>
    );
  }
}

export default App;
