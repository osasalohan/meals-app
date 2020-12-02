import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "../components/MealItem";

const MealList = (props) => {
  const favouriteMeals = useSelector((state) => state.favouriteMeals);

  const renderItem = ({ item }) => {
    const isFavourite = favouriteMeals.some((meal) => meal.id === item.id);

    return (
      <MealItem
        title={item.title}
        image={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        onPress={() => {
          props.navigation.navigate("MealDetail", {
            mId: item.id,
            mTitle: item.title,
            isFav: isFavourite,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.meals}
        renderItem={renderItem}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  list: {
    width: "100%",
  },
});

export default MealList;
