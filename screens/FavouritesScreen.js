import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";
import MealList from "../components/MealList";

const FavouritesScreen = (props) => {
  const meals = useSelector((state) => state.favouriteMeals);

  if (meals.length === 0 || !meals) {
    return (
      <View style={styles.content}>
        <DefaultText>You Have No Favourites</DefaultText>
      </View>
    );
  }

  return <MealList meals={meals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = {
  headerTitle: "Favourites",
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavouritesScreen;
