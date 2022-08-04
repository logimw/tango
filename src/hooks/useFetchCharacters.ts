import { useEffect, useState } from "react";
import { useCharacters } from "../providers/CharactersProvider";
import { actionTypes } from "../reducers/charactersReducer";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const useFetchCharacters = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { characters, dispatch } = useCharacters();
  const { page, limit, gender, culture } = characters;
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${baseUrl}/characters?page=${page}&pageSize=${limit}&gender=${gender}&culture=${culture}`
        );

        if (res.ok) {
          const link = await res.headers.get("link");
          if (link) {
            const match = link.split("page=");
            const lastPage = match[match.length - 1].slice(0, 3) || "1";
            dispatch({
              type: actionTypes.setTotalPages,
              payload: parseInt(lastPage),
            });
          }
          const data = await res.json();
          setData(data);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    })();
  }, [gender, limit, page, culture, dispatch]);
  return { data, loading, error };
};
