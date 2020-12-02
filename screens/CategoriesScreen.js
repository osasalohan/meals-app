import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryItem from "../components/CategoryItem";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const CategoriesScreen = (props) => {
  const renderItem = ({ item }) => (
    <CategoryItem
      title={item.title}
      color={item.color}
      onPress={() =>
        props.navigation.navigate("CategoryMeals", { cId: item.id })
      }
    />
  );

  return <FlatList numColumns={2} data={CATEGORIES} renderItem={renderItem} />;
};

CategoriesScreen.navigationOptions = (navigationData) => ({
  headerTitle: "Meal Categories",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName="md-menu"
        onPress={() => {
          navigationData.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
