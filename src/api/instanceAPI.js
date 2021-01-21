import Axios from "axios";

const istance = Axios.create({
  baseURL: "http://localhost:3100/",
});

export default istance;
