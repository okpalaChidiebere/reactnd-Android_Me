import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import AndroidMeComponent, { AndroidMeComponentOptions } from "./AndroidMeComponent"
import MainComponent, { MainComponentOptions } from "./MainComponent"
import { component_android_me, component_main } from "../utils/strings"

const Stack = createStackNavigator()
const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="screen" initialRouteName={component_main}>
        <Stack.Screen
          name={component_android_me}
          component={AndroidMeComponent}
          options={AndroidMeComponentOptions}
        />
        <Stack.Screen
          name={component_main}
          component={MainComponent}
          options={MainComponentOptions}
        />
    </Stack.Navigator>
  </NavigationContainer>
)

export default MainNavigator