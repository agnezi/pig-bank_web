import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import Main from "./views/main";
import "./styles.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
};

export default App;
