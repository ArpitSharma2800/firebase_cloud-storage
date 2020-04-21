import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import firebase from "./Firebase";

import TimesList from "./components/times-list";
import AddTimeEntryForm from "./components/add-time-entry-form";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={TimesList} />
          <Route path="/trend" component={AddTimeEntryForm} />
        </div>
      </BrowserRouter>
    );
  }
}

// function App() {
//     return ( <
//         div className = "App" >
//         <
//         h1 > It works < /h1> <
//         TimesList / >
//         <
//         AddTimeEntryForm / >
//         <
//         /div>
//     );
// }

export default App;
