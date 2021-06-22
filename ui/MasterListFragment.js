import React, { Fragment } from "react"
import { View, StyleSheet, FlatList, Image, Pressable, TouchableHighlight, Text }  from "react-native"
import { getAll } from "../utils/AndroidImageAssets"
import styled from "styled-components/native"

export default function MasterListFragment({ onImageClick, onNextButtonClick, mTwoPane }){

    return (
        <Fragment>
            <View style={{ flex: 1, flexGrow: 7, }}>
                <FlatList 
                data={getAll()}
                renderItem={({ item, index }) => (
                    <Pressable onPress={() => onImageClick(index)}>
                        <View style={{ flex: 1, margin: 3 }}>
                            <ImageBox mTwoPane={mTwoPane} source={item}/>
                        </View>
                    </Pressable>
                )}
                //Setting the number of column
                numColumns={mTwoPane ? 2 : 3}
                keyExtractor={(item, index) => index.toString()}
                />
            </View>
            {
                !mTwoPane 
                && (
                    <View style={{ flex: 1, flexGrow: 1}}>
                        <TouchableHighlight style={styles.fullWidthButton} underlayColor="#b3b3b3" onPress={onNextButtonClick}>
                            <Text>Next</Text>
                        </TouchableHighlight>
                    </View>
                )
            }
        </Fragment>
    )
}

const ImageBox = styled.Image`
width: ${props => props.mTwoPane ? "190px" : "125px"};
height: ${props => props.mTwoPane ? "100px" : "75px"};
resize-mode: stretch;
`

const styles = StyleSheet.create({
    fullWidthButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d9d9d9",
    }
})