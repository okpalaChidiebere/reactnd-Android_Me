import React from "react"
import { View, StyleSheet, ScrollView }  from "react-native"
import MasterListFragment from "../MasterListFragment"
import BodyPartFragment from "../BodyPartFragment"
import { getHeads, getBodies, getLegs } from "../../utils/AndroidImageAssets"


export default function MasterDetail({ mTwoPane, bodyPart, onImageSelected }){

    const { headIndex, bodyIndex, legIndex } = bodyPart

    /**
     * In two pane mode, we have two horizontal views. The Master on the Left side and our 
     * BodyPartfragments on the right side
     * 
     * We add initial BodyPartFragments to the screen. Notic that it is thesame way it arranged 
     * in the AndroidMeComponent where we have three Views aligned vertically for each BodyPart 
     * that re-renders during runtime based on the image clicked in the master.
     * 
     * We have the MasterListFragement that is static and does not re-render at runtime
     */
    return (
        <View style={{ flex: 1, flexDirection: "row"}}>
            <View style={{ flex: 1}}>
                <MasterListFragment mTwoPane={mTwoPane} onImageClick={onImageSelected}/>
            </View>
            <View style={{ flex: 1, flexDirection: "column", backgroundColor: "" }}>
                <ScrollView>
                    <View style={styles.detailView}>
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
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailView: {
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