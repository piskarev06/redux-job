import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import s from "./JobList.module.scss";
import { JobPosition } from "../JobPosition";
import { addFilter } from "../../store/filters/filtersActions";
import { selectVisibleJobs } from "../../store/jobs/jobsSelectors";
import { selectFilters } from "../../store/filters/filtersSelectors";
import { store } from "../../store";

export const JobList: FC = () => {
  const state = store.getState();
  type StateType = typeof state;

  const filters = useSelector(selectFilters);
  const jobs = useSelector((state: StateType) =>
    selectVisibleJobs(state, filters)
  );
  const dispatch = useDispatch();

  const handleAddFilter = (filter: string) => {
    dispatch(addFilter(filter));
  };
  return (
    <div className={s.jobList}>
      {jobs.map((item) => (
        // @ts-ignore
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};
