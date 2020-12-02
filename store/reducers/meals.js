import { MEALS } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAV } from "../actions";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      const index = state.favouriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (index >= 0) {
        const favouriteMeals = [...state.favouriteMeals];
        favouriteMeals.splice(index, 1);
        return { ...state, favouriteMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favouriteMeals: state.favouriteMeals.concat(meal) };
      }
    case SET_FILTERS:
      const filters = action.filters;
      const filteredMeals = state.meals.filter((meal) => {
        for (filter in filters) {
          if (filters[filter] && !meal[filter]) return false;
        }
        return true;
      });
      return { ...state, filteredMeals };
    default:
      return state;
  }
};

export default rootReducer;
