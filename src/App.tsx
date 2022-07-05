import React from "react";

import "./App.css";

import { Filter } from "./components/Filter";
import { JobList } from "./components/JobList";
import { Header } from "./components/Header";

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
