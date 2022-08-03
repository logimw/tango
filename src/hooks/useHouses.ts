import { useEffect, useState } from "react";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const useHouses = (id: number | string) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(`${baseUrl}/houses/${id}`);

        if (res.ok) {
          const data = await res.json();
          setData(data);
          setLoading(false);
        }
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    })();
  }, [id]);
  return { data, loading, error };
};
