import { ADD_FILTER, DELETE_FILTER, RESET_FILTERS } from "./filtersConstants";
import { FiltersAction } from "./filters.types";

export const filtersReducer = (
  state: string[] = [],
  action: FiltersAction
): string[] => {
  switch (action.type) {
    case ADD_FILTER: {
      if (!state.includes(action.filter)) {
        return [...state, action.filter];
      }
      return state;
    }
    case DELETE_FILTER: {
      return state.filter((filter) => {
        return filter !== action.filter;
      });
    }
    case RESET_FILTERS: {
      return [];
    }
    default: {
      return state;
    }
  }
};
