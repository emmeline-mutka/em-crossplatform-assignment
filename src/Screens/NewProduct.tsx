import React, { FC } from "react";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { StackScreens } from "../types";
import { Feather } from '@expo/vector-icons';
import { Foundation } from "@expo/vector-icons";

export const NewProduct: FC<
  NativeStackScreenProps<StackScreens, "NewProduct">
> = (props) => {
  return (
    <View style={styles.newContainer}>
      <View style={styles.createContainers}>
        <TextInput placeholder={"Name"}></TextInput>
      </View>
      <View style={styles.createContainers}>
        <TextInput placeholder={"Type"}></TextInput>
      </View>
      <View style={styles.createContainers}>
        <TextInput placeholder={"Price"}></TextInput>
      </View>

      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.saveButton}
          onPress={() => props.navigation.navigate("ProductList")}
        >
          <Text style={styles.saveText}>SAVE</Text>
          <Feather name="download" size={24} color="#008000" />
        </Pressable>
        <Pressable
          style={styles.cancelButton}
          onPress={() => props.navigation.navigate("ProductList")}
        >
          <Text style={styles.cancelText}>CANCEL</Text>
          <Foundation name="prohibited" size={24} color="#ff0000" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newContainer: {
    flex: 1,
  },
  createContainers: {
    padding: 10,
    marginTop: 30,
    marginRight: 10,
    marginLeft: 10,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
  saveButton: {
    flex: 1,
    flexDirection: "row",
    margin: 5,
    backgroundColor: "#000000",
    height: 40,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  saveText: {
    padding: 10,
    color: "#ffffff"
  },
  cancelButton: {
    flex: 1,
    flexDirection: "row",
    margin: 5,
    backgroundColor: "#000000",
    height: 40,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  cancelText: {
      padding: 10,
      color: "#ffffff",
  }
});
