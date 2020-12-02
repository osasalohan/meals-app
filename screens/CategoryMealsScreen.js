import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = (props) => {
  const cId = props.navigation.getParam("cId");
  const availableMeals = useSelector((state) => state.filteredMeals);
  const meals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(cId) >= 0
  );

  if (meals.length === 0 || !meals) {
    return (
      <View style={styles.content}>
        <DefaultText>No Meals. Check Your Filters</DefaultText>
      </View>
    );
  }

  return <MealList meals={meals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const cId = navigationData.navigation.getParam("cId");
  const category = CATEGORIES.find((c) => c.id === cId);

  return {
    headerTitle: category.title,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
