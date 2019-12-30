import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import Routes from "./routes";
import "./styles.css";
import "antd/dist/antd.css";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <>
        <Routes />
      </>
    </Provider>
  );
};

export default App;
