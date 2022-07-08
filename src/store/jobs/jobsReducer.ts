import { ADD_JOBS } from "./jobsConstants";
import { JobType, JobsAction } from "./jobs.types";

export const jobsReducer = (
  state: JobType[] = [],
  action: JobsAction
): JobType[] => {
  switch (action.type) {
    case ADD_JOBS: {
      return action.jobs;
    }
    default: {
      return state;
    }
  }
};
