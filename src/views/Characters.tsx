import React from "react";
import Loading from "components/Loading";
import Navigation from "components/Table/Navigation";
import Filters from "components/Table/Filters";
import SearchBar from "components/Table/SearchBar";
import { useFetchCharacters } from "hooks/useFetchCharacters";
import { StyledTable } from "components/Table/Table.styled";
import Table from "components/Table";

const Characters = () => {
  const { data, loading, error } = useFetchCharacters();

  if (error) throw error;
  if (loading) return <Loading />;
  return (
    <StyledTable>
      <div className="top">
        <Filters />
        <SearchBar />
      </div>
      <Table data={data} />
      <Navigation />
    </StyledTable>
  );
};

export default Characters;
