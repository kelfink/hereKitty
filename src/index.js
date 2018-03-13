import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import { reducer } from "./redux";
import { watcherSaga } from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

console.log("Chrome?", window.navigator.userAgent);
// create a redux store with our reducer above and middleware
//let store = createStore(
  //reducer,
 // compose(applyMiddleware(sagaMiddleware), reduxDevTools)
//);

// Only chrome can handle the redux dev tool
// redux compose cannot handle a null or undefined middleware
if (window.navigator.userAgent.includes('Chrome')) {
  console.log("is chrome");
  var store = createStore(reducer,
   compose(applyMiddleware(sagaMiddleware)));
} else {
  var store = createStore(
    reducer,
    compose(
      applyMiddleware(
        sagaMiddleware)
      )
  );
}

// run the saga
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
