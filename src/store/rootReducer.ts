import { combineReducers } from "redux";

import { jobsReducer } from "./jobs/jobsReducer";
import { filtersReducer } from "./filters/filtersReducer";

export const rootReducer = combineReducers({
  jobs: jobsReducer,
  filters: filtersReducer,
});
