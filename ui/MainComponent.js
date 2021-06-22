import React from "react"
import { View, StyleSheet, Platform, ToastAndroid }  from "react-native"
import MasterListFragment from "./MasterListFragment"

export default function MainComponent(){

    //This callback function helps the MasterListFragment communicate back to the MainComponent
    const onImageSelected = (position) => {
        Platform.OS == 'android' && (ToastAndroid.showWithGravityAndOffset(
            `Position clicked = ${position}`,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50
        ))
    }

    return(
        <View>
            <MasterListFragment onImageClick={onImageSelected}/>
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