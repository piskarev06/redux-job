import React, { FC } from "react";

import s from "./JobList.module.scss";

import data from "../../db.json";
import { JobPosition } from "../JobPosition";

export const JobList: FC = () => {
  return (
    <div className={s.jobList}>
      {data.map((item) => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  );
};
