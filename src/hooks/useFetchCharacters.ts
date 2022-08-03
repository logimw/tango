import { useEffect, useState } from "react";
import { useCharacters } from "../providers/CharactersProvider";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const useFetchCharacters = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { characters } = useCharacters();
  const { page, limit, gender, culture } = characters;
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${baseUrl}/characters?page=${page}&pageSize=${limit}&gender=${gender}&culture=${culture}`
        );

        if (res.ok) {
          const data = await res.json();
          setData(data);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    })();
  }, [characters, gender, limit, page, culture]);
  return { data, loading, error };
};
