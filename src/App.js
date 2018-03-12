import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";

class App extends Component {
  render() {
    const {
      fetching,
      dog,
      onRequestDog,
      cat,
      onRequestCat,
      error
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={dog || cat || logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dog and Cat Saga</h1>
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {cat ? (
          <p className="App-intro">Keep clicking for new cats</p>
        ) : (
          <p className="App-intro">Replace the React icon with a cat!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <div>
            <button onClick={onRequestDog}>Request a Dog</button>
            <button onClick={onRequestCat}>Request a Cat</button>
          </div>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    cat: state.cat,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "DOG_API_CALL_REQUEST" }),
    onRequestCat: () => dispatch({ type: "CAT_API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
