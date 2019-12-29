import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import Main from "./views/main";
import MainMenu from "./components/MainMenu";
import "./styles.css";
import "antd/dist/antd.css";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <>
        <MainMenu />
        <Main />
      </>
    </Provider>
  );
};

export default App;
