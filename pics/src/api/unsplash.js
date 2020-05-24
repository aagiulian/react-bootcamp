import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID TxU_E5-mfZHO_yj1CuWFaRehCbFwluXlmHjCOsoSX4o",
  },
});
