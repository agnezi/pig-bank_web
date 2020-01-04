import React from "react";

import MainMenu from "../../components/MainMenu";
import LacesTable from "../../components/LacesTable";
import LacesForm from "../../components/LacesForm";

const LacesContainer = () => {
  return (
    <>
      <MainMenu />
      <LacesTable />
      <LacesForm />
    </>
  );
};

export default LacesContainer;
