import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
// import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Color from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Color.primay,
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerTintColor: "white",
};

const MealsStackNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
  }
);

const FavStackNavigator = createStackNavigator(
  {
    Favourites: FavouritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
  }
);

const MealsTabNavigator = createMaterialBottomTabNavigator(
  {
    Meals: {
      screen: MealsStackNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        ),
        tabBarColor: Color.primay,
      },
    },
    Favourites: {
      screen: FavStackNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
        ),
        tabBarColor: Color.accent,
      },
    },
  },
  {
    activeColor: "white",
    shifting: true,
  }
);

const FiltersScreenStack = createStackNavigator(
  {
    Filter: FiltersScreen,
  },
  { defaultNavigationOptions: defaultNavigationOptions }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: MealsTabNavigator,
    Filter: FiltersScreenStack,
  },
  {
    contentOptions: {
      activeTintColor: Color.accent,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
