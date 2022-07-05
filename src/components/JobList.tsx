import React, { FC } from "react";

import data from "../db.json";
import { JobPosition } from "./JobPosition";

export const JobList: FC = () => {
  return (
    <div className="job-list">
      {data.map((item) => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  );
};
