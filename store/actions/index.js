export const TOGGLE_FAV = "TOGGLE FAVOURITES";
export const SET_FILTERS = "SET FILTERS";

export const toggleFavourites = (id) => ({
  type: TOGGLE_FAV,
  mealId: id,
});

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  filters,
});
