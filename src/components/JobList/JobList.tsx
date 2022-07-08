import React, { FC } from "react";
import { useSelector } from "react-redux";

import s from "./JobList.module.scss";
import { JobPosition } from "../JobPosition";
import { selectAllJobs } from "../../store/jobs/jobsSelectors";

export const JobList: FC = () => {
  const jobs = useSelector(selectAllJobs);

  return (
    <div className={s.jobList}>
      {/* @ts-ignore */}
      {jobs.map((item) => (
        // @ts-ignore
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  );
};
