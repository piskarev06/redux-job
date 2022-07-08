import { ADD_FILTER, DELETE_FILTER, RESET_FILTERS } from "./filtersConstants";

interface AddFilterAction {
  type: typeof ADD_FILTER;
  filter: string;
}

interface DeleteFilterAction {
  type: typeof DELETE_FILTER;
  filter: string;
}

interface ResetFilterAction {
  type: typeof RESET_FILTERS;
}

export type FiltersAction =
  | AddFilterAction
  | DeleteFilterAction
  | ResetFilterAction;
