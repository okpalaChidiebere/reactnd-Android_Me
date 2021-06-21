import React, { Fragment } from "react"
import { Image }  from "react-native"

export default function BodyPartFragment({ listIndex, imageIds }){
    return (
        <Fragment>
            <Image 
            style={{flex: 1}}
            source={imageIds[listIndex]}
            />
        </Fragment>
    )
}