import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Filter } from "./components/Filter/Filter";
import { JobList } from "./components/JobList/JobList";
import { Header } from "./components/Header/Header";
import { addJobs } from "./store/jobs/jobsActions";

import data from "./db.json";

export const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addJobs(data));
  });
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
