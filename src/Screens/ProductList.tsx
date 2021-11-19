import React, { FC } from "react";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { StackScreens } from "../types";
import { FAB } from "react-native-paper";

export const ProductList: FC<
  NativeStackScreenProps<StackScreens, "ProductList">
> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.listHeader}>
        <Text>Name</Text>
        <Text>Type</Text>
        <Text>Price</Text>
      </View>
      <View style={styles.productsList}>
        <Text style={styles.productsName}>Endwalker</Text>
        <Text style={styles.productsType}>Integrated</Text>
        <Text style={styles.productsPrice}>399</Text>
      </View>
      <FAB
        style={styles.fabButton}
        small
        icon="plus"
        onPress={() => props.navigation.navigate("NewProduct")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
  },
  productsList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  productsName: {

  },
  productsType: {

  },
  productsPrice: {

  },
  fabButton: {
    position: "absolute",
    right: "5%",
    bottom: "5%",
    backgroundColor: "#aa66dd",
  },
});
