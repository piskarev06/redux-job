import { ADD_FILTER, DELETE_FILTER, RESET_FILTERS } from "./filtersConstants";

export const addFilter = (filter: string) => ({
  type: ADD_FILTER,
  filter,
});

export const deleteFilter = (filter: string) => ({
  type: DELETE_FILTER,
  filter,
});

export const resetFilters = {
  type: RESET_FILTERS,
};
