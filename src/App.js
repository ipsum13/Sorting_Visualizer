import React from "react";
import { Provider } from "react-redux";
import { Container } from "react-bootstrap";
import store from "./store";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Visualizer from "./components/visualizer/Visualizer";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Topbar />

        <Visualizer />
      </div>
    </Provider>
  );
}

export default App;
