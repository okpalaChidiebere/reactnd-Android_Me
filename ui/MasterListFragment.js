import React, { Fragment } from "react"
import { View, StyleSheet, FlatList, Image, Pressable, TouchableHighlight, Text }  from "react-native"
import { getAll } from "../utils/AndroidImageAssets"

export default function MasterListFragment({ onImageClick, onNextButtonClick }){

    return (
        <Fragment>
            <View style={{ flex: 1, flexGrow: 7, }}>
                <FlatList 
                data={getAll()}
                renderItem={({ item, index }) => (
                    <Pressable onPress={() => onImageClick(index)}>
                        <View style={{ flex: 1, margin: 3 }}>
                            <Image style={styles.imageBox} source={item} />
                        </View>
                    </Pressable>
                )}
                //Setting the number of column
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <View style={{ flex: 1, flexGrow: 1}}>
                <TouchableHighlight style={styles.fullWidthButton} underlayColor="#b3b3b3" onPress={onNextButtonClick}>
                    <Text>Next</Text>
                </TouchableHighlight>
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    imageBox: {
        width: 125,
        height: 75,
        resizeMode: "stretch",
    },
    fullWidthButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d9d9d9",
    }
})