import { combineReducers } from "redux";

import { jobsReducer } from "./jobs/jobsReducer";

export const rootReducer = combineReducers({
  jobs: jobsReducer,
});
