import { message } from "antd";

const errorHandler = err => {
  message.error(err.message);
};

export default errorHandler;
