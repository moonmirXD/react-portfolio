import { useEffect, useState } from "react";
const axios = require("axios");

const BASE_URL = process.env.REACT_APP_BASE_URL;

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}${url}`);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { loading, data };
};

const UsePost = (url, body) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const postData = async () => {
    try {
      const response = await axios.post(url, body);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { loading, data };
};

export { useFetch, UsePost };
