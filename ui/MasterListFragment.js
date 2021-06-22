import React, { Fragment } from "react"
import { View, StyleSheet, FlatList, Image }  from "react-native"
import { getAll } from "../utils/AndroidImageAssets"

export default function MasterListFragment(){
    return (
        <Fragment>
            <FlatList 
            data={getAll()}
            renderItem={({ item }) => (
              <View style={{ flex: 1, margin: 3 }}>
                <Image style={styles.imageBox} source={item} />
              </View>
            )}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
            />
        </Fragment>
    )
}

const styles = StyleSheet.create({
    imageBox: {
        width: 125,
        height: 75,
        resizeMode: "stretch",
    },
})