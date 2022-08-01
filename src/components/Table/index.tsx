import React, { useEffect, useState } from "react";
import { StyledTable } from "./Table.styled";

interface Data {
  aliases: string[];
  allegiances?: any;
  books?: string[];
  born: string;
  culture?: string;
  died: string;
  father: string;
  gender?: string;
  mother: string;
  name: string;
  playedBy: string[];
  povBooks: string[];
  spouse: string;
  titles: string[];
  tvSeries?: string[];
  url: string;
}

//
// interface HeroData {
//   gender: string;
//   died: string;
//   culture: string;
//   url: string;
// }

const extractNumbersFromString = (str: string) => {
  const r = /\d+/;
  return str.match(r);
};

const Table = () => {
  const headers = ["Character", "Alive", "Gender", "Culture", "Allegiances"];

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://anapioficeandfire.com/api/characters?page=2&pageSize=10"
      );
      const data = await res.json();
      setData(data);
    })();
  }, []);

  const renderData = (item: Data) => {
    const { name, aliases, born, died, gender, culture, allegiances } = item;
    const createCharacter = (name: string, aliases: string[]) => {
      if (name && aliases) return name + ", " + aliases.join(", ");
      if (!name && aliases) return aliases.join(", ");
      if (name && !aliases) return name;
      if (!name && !aliases) return "No name!";
    };

    const getIdsOfHouses = (allegiances: string[]) => {
      const [allegiance] = allegiances;
      if (allegiance) {
        const allegianceUrlParts = allegiance.split("/");
        const allegianceId = allegianceUrlParts.at(-1);
        return allegianceId;
      }
    };

    const countDeadAge = (
      yearOfBirth: string | RegExpMatchArray | null,
      yearOfDeath: string | RegExpMatchArray | null
    ) => {
      const yearOfBirthNumber = Number(yearOfBirth);
      const yearOfDeathNumber = Number(yearOfDeath);
      const age = yearOfDeathNumber - yearOfBirthNumber;
      if (age < 0) return (yearOfBirthNumber + yearOfBirthNumber).toString();
      return age;
    };

    const bornYear = extractNumbersFromString(born);
    const deadYear = extractNumbersFromString(died);

    const isAlive = (born: string, died: string) => {
      if (born && died) return countDeadAge(bornYear, deadYear);
      if (!born && died) return "No";
      if (!born && !died) return "Unknown";
      if (born && !died) return "Yes";
    };
    const character = createCharacter(name, aliases);
    const houses = getIdsOfHouses(allegiances);
    const alive = isAlive(born, died);

    console.log(item);

    return (
      <tr>
        <td>{character}</td>
        <td>{alive}</td>
        <td>{gender}</td>
        <td>{culture || "Unknown"}</td>
        <td>{houses}</td>
      </tr>
    );
  };
  return (
    <StyledTable>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length && data.map((item: Data) => renderData(item))}
        </tbody>
      </table>
    </StyledTable>
  );
};

export default Table;
