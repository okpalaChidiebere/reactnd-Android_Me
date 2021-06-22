import React from "react"
import { View, StyleSheet }  from "react-native"
import MasterListFragment from "./MasterListFragment"

export default function MainComponent(){
    return(
        <View>
            <MasterListFragment />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
})

export function MainComponentOptions({ route, navigation }) {

    return {
        title: "Android Me",
        headerTintColor: '#fff',
        headerStyle: { 
            backgroundColor: "#3F51B5",
        },
    }
}