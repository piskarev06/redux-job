import { ADD_JOBS } from "./jobsConstants";
import { JobType } from "./jobs.types";

export const addJobs = (jobs: JobType[]) => ({
  type: ADD_JOBS,
  jobs,
});
