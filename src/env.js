const prodEnv = {
  baseUrl: "https://pig-bank-api.herokuapp.com/api"
};

const devEnv = {
  baseUrl: "http://localhost:3001/api"
};

export default process.env.REACT_APP_ENV !== "dev" ? prodEnv : devEnv;
