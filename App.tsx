import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackScreens } from "./src/types";
import { ProductList } from "./src/Screens/ProductList";
import { NewProduct } from "./src/Screens/NewProduct";

export default function App() {
  const Stack = createNativeStackNavigator<StackScreens>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{
            title: "Items",
            headerStyle: {
              backgroundColor: "#aa66dd",
            },
          }}
        />
        <Stack.Screen
          name="NewProduct"
          component={NewProduct}
          options={{
            title: "Create new product",
            headerStyle: {
              backgroundColor: "#aa66dd",
            },
          
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
