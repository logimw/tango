import React from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "components/Loading";
import HouseTemplate from "components/templates/HouseTemplate";
import { useHouses } from "hooks/useHouses";

const House = () => {
  const { id } = useParams();
  const { data: house, loading, error } = useHouses(id!);

  if (error) throw error;
  if (loading) return <Loading />;
  return (
    <HouseTemplate house={house}>
      <div data-testid="test" className="back-link">
        <Link to={"/"}>
          <i>&#10132;</i>Back to characters
        </Link>
      </div>
    </HouseTemplate>
  );
};

export default House;
