import React from "react";

import { Filter } from "./components/Filter/Filter";
import { JobList } from "./components/JobList/JobList";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Filter />
        <JobList />
      </div>
    </>
  );
};
