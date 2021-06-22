import React, { useState } from "react"
import { View, StyleSheet, Platform, ToastAndroid, useWindowDimensions }  from "react-native"
import MasterListFragment from "./MasterListFragment"
import { component_android_me } from "../utils/strings"
import MasterDetail from "./sw600/MasterDetail"

export default function MainComponent({ navigation }){

    const window = useWindowDimensions()

    // Variables to store the values for the list index of the selected images
    // The default value will be index = 0
    const [state, setState] = useState({
        headIndex: 0,
        bodyIndex: 0,
        legIndex: 0,
    })

    //This callback function helps the MasterListFragment communicate back to the MainComponent
    const onImageSelected = (position) => {
        Platform.OS == 'android' && (ToastAndroid.showWithGravityAndOffset(
            `Position clicked = ${position}`,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50
        ))

        // bodyPartNumber will be = 0 for the head fragment, 1 for the body, and 2 for the leg fragment
        // Dividing by 12 gives us float values but we strip off the decimals to get these integer values because each list of images resources has a size of 12
        //Eg clicking on index 35 gives us 2.9166666666666665 but we cut out the decimals
        const bodyPartNumber = parseInt(position / 12)

        // Store the correct list index no matter where in the image list has been clicked
        // This ensures that the index will always be a value between 0-11
        const listIndex = position - 12*bodyPartNumber

        //set the currently diplayed item for the correct body part fragment
        switch(bodyPartNumber) {
            case 0: setState({ ...state, headIndex: listIndex})
                break
            case 1: setState({ ...state, bodyIndex: listIndex})
                break
            case 2: setState({ ...state, legIndex: listIndex})
                break
            default: break
        }
    }

    const nextButtonClick = () => {
        const { headIndex, bodyIndex, legIndex} = state

        // Put this information in route.params and attach it to react navigation that will launch an AndroidMeComponent
        //https://reactnavigation.org/docs/params
        navigation.navigate(component_android_me, {
          headIndex,
          bodyIndex, 
          legIndex,
        })
    }
    return(
        <View style={styles.container}>
            {
                /* Determine if you're creating a two-pane or single-pane display so that we can diplay our fragments correctly
                 for all screen sizes */
                window.width >= 600
                ? <MasterDetail mTwoPane={window.width >= 600} bodyPart={{...state}} onImageSelected={onImageSelected}/>
                : <MasterListFragment onImageClick={onImageSelected} onNextButtonClick={nextButtonClick} mTwoPane={window.width >= 600}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
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

//