import { useEffect, useState } from "react";

const URL = "http://127.0.0.1:8000";
// retrieve_files;

const fetchLatestFiles = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  useEffect(() => {
    const getFiles = () => {
      try {
        const response = fetch(`${URL}/retrieve_files`);
        console.log(response);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getFiles();
  }, []);
};
export default fetchLatestFiles;
