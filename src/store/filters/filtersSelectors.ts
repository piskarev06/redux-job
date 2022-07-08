import { store } from "../../store/index";

const state = store.getState();
type StateType = typeof state;

export const selectFilters = (state: StateType) => state.filters;
