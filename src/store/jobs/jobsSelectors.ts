import { store } from "../../store/index";
import { JobType } from "./jobs.types";

const state = store.getState();
type StateType = typeof state;

export const selectAllJobs = (state: StateType) => state.jobs;

export const selectVisibleJobs = (state: StateType, filters: string[] = []) => {
  if (filters.length === 0) return state.jobs;

  return state.jobs.filter((job: JobType) => {
    const jobFilters = [].concat(
      //@ts-ignore
      job.role,
      job.level,
      ...job.languages,
      ...job.tools!
    );

    //@ts-ignore
    return filters.every((filter) => jobFilters.includes(filter));
  });
};
