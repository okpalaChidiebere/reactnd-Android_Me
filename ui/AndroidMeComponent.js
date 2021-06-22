import React from "react"
import { View, StyleSheet, ScrollView }  from "react-native"
import BodyPartFragment from "./BodyPartFragment"
import { getHeads, getBodies, getLegs } from "../utils/AndroidImageAssets"

export default function AndroidMeComponent({ route, navigation }) {

  const { headIndex, bodyIndex, legIndex } = route.params

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.frames}>
            <BodyPartFragment imageIds={getHeads()} listIndex={headIndex}/>
          </View>
          <View style={styles.frames}>
            <BodyPartFragment imageIds={getBodies()} listIndex={bodyIndex}/>
          </View>
          <View style={styles.frames}>
            <BodyPartFragment imageIds={getLegs()} listIndex={legIndex}/>
          </View>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    frames: {
      flex: 1,
      flexGrow: 1,
      padding: 5,
    }
  })

export function AndroidMeComponentOptions({ route, navigation }) {

    return {
        title: "Android Me",
        headerTintColor: '#fff',
        headerStyle: { 
            backgroundColor: "#3F51B5",
        },
    }
}