import { ADD_JOBS } from "./jobsConstants";

export interface JobType {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools?: string[];
}

interface AddJobsAction {
  type: typeof ADD_JOBS;
  jobs: JobType[];
}

export type JobsAction = AddJobsAction;
