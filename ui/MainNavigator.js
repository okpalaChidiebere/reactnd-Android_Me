import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import AndroidMeComponent, { AndroidMeComponentOptions } from "./AndroidMeComponent"
import { component_android_me } from "../utils/strings"

const Stack = createStackNavigator()
const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="screen" initialRouteName={component_android_me}>
        <Stack.Screen
          name={component_android_me}
          component={AndroidMeComponent}
          options={AndroidMeComponentOptions}
        />
    </Stack.Navigator>
  </NavigationContainer>
)

export default MainNavigator