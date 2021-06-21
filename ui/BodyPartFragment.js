import React, { Fragment, useState, useEffect } from "react"
import { Image, Pressable }  from "react-native"

export default function BodyPartFragment({ listIndex, imageIds }){

    const [ state, setState ] = useState({
        mImageIds: [],
        mListIndex: 0,
      })
    
    useEffect(() => {

        setState({
            mImageIds: imageIds,
            mListIndex: listIndex,
        }) 
    }, [ imageIds,listIndex ]) //We set the dependencies that will control this component. Anytime the "Index to display first" changes, we re-render the whole image

    // Set a click listener on the Image
    const onClick = () => {
        setState((curr) => ({
            ...curr, 
            //if we reached the end of the index and the user clicks again, we reset the index to the begining of the list
            mListIndex: curr.mListIndex < curr.mImageIds.length-1 ? ++curr.mListIndex : 0,
        }))
    }

    const { mImageIds, mListIndex } = state

    return (
        <Fragment>
            <Pressable onPress={onClick}>
                <Image 
                style={{flex: 1}}
                source={/* Set the image resource to the list item at the stored index */ mImageIds[mListIndex]}
                />
            </Pressable>
        </Fragment>
    )
}