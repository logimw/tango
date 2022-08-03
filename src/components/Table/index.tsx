import React from "react";
import { Character } from "types/CharacterType";
import { extractNumbersFromString } from "utils/extractNumbersFromString";
import { countDateOfDeath } from "utils/countDateOfDeath";
import { getIdsOfHouses } from "utils/getIdsOfHouses";
import { Link } from "react-router-dom";

interface TableProps {
  data: Character[];
}

const UNKNOWN = "Unknown";
const NO_ALLEGIANCES = "No allegiances";
const Table = ({ data }: TableProps) => {
  const headers = ["Character", "Alive", "Gender", "Culture", "Allegiances"];

  const renderData = (item: Character, index: number) => {
    const { name, aliases, born, died, gender, culture, allegiances } = item;
    const createCharacter = (name: string, aliases: string[]) => {
      if (name && aliases[0] === "") return name;
      if (name && aliases) return name + ", " + aliases.join(", ");
      if (!name && aliases) return aliases.join(", ");
      if (!name && !aliases) return "No name!";
    };
    const bornYear = extractNumbersFromString(born);
    const deadYear = extractNumbersFromString(died);

    const isAlive = (born: string, died: string) => {
      if (born && died) {
        const age = countDateOfDeath(bornYear, deadYear);
        return `No, died at ${age} years old.`;
      }
      if (!born && died) return "No";
      if (!born && !died) return "Unknown";
      if (born && !died) return "Yes";
    };
    const character = createCharacter(name, aliases);
    const houses = getIdsOfHouses(allegiances);
    const alive = isAlive(born, died);
    const housesValues = houses.map((id, index) => {
      return (
        <div key={index}>
          <Link to={`houses/${id}`}>{id}</Link>
          {index === houses.length - 1 ? null : ", "}
        </div>
      );
    });

    if (!item) return "Not found";
    return (
      <tr key={index}>
        <td>{character}</td>
        <td>{alive}</td>
        <td>{gender}</td>
        <td>{culture || UNKNOWN}</td>
        <td>{houses.length === 0 ? NO_ALLEGIANCES : housesValues}</td>
      </tr>
    );
  };
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item: Character, index: number) =>
            renderData(item, index)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
