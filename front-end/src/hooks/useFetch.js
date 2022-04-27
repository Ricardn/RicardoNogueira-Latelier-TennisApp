import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const standardize = async (response) => {
    if (response.status !== 200) {
      return {
        status: response.status,
        message: response.statusText,
        data: null,
      };
    }
    return {
      status: 200,
      message: response.statusText,
      data: await response.json(),
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const standardized = await standardize(response);
        setTimeout(() => {
          setData(standardized.data);
          setLoading(false);
        }, 3000);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
}
