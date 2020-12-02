import React from "react";
import { View, Text, TouchableNativeFeedback, StyleSheet } from "react-native";

const CategoryItem = (props) => (
  <View style={styles.gridItem}>
    <TouchableNativeFeedback style={styles.gridContent} onPress={props.onPress}>
      <View style={{ backgroundColor: props.color, ...styles.container }}>
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  </View>
);

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3
  },
  gridContent: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "right",
  },
});

export default CategoryItem;
