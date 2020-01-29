import React from "react";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import en_US from "antd/es/locale-provider/en_US";
import store from "./store";
import Routes from "./routes";
import "antd/dist/antd.css";

const App = () => {
  return (
    <ConfigProvider locale={en_US}>
      <Provider store={store}>
        <>
          <Routes />
        </>
      </Provider>
    </ConfigProvider>
  );
};

export default App;
