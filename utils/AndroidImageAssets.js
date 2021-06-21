// Lists for all AndroidMe images
// Broken down into heads, bodies, legs, and all images

const heads = [
    require("../assets/head1.png"),
    require("../assets/head2.png"),
    require("../assets/head3.png"),
    require("../assets/head4.png"),
    require("../assets/head5.png"),
    require("../assets/head6.png"),
    require("../assets/head7.png"),
    require("../assets/head8.png"),
    require("../assets/head9.png"),
    require("../assets/head10.png"),
    require("../assets/head11.png"),
    require("../assets/head12.png"),
]

const bodies = [
    require("../assets/body1.png"),
    require("../assets/body2.png"),
    require("../assets/body3.png"),
    require("../assets/body4.png"),
    require("../assets/body5.png"),
    require("../assets/body6.png"),
    require("../assets/body7.png"),
    require("../assets/body8.png"),
    require("../assets/body9.png"),
    require("../assets/body10.png"),
    require("../assets/body11.png"),
    require("../assets/body12.png"),
]

const legs = [
    require("../assets/legs1.png"),
    require("../assets/legs2.png"),
    require("../assets/legs3.png"),
    require("../assets/legs4.png"),
    require("../assets/legs5.png"),
    require("../assets/legs6.png"),
    require("../assets/legs7.png"),
    require("../assets/legs8.png"),
    require("../assets/legs9.png"),
    require("../assets/legs10.png"),
    require("../assets/legs11.png"),
    require("../assets/legs12.png"),
]

const all = [
    ...heads,
    ...bodies,
    ...legs,
]

// Getter methods that return lists of all head images, body images, and leg images

export function getHeads(){
    return heads
}

export function getBodies() {
    return bodies
}

export function getLegs() {
    return legs
}


// Returns a list of all the images combined: heads, bodies, and legs in that order
export function getAll() {
    return all;
}