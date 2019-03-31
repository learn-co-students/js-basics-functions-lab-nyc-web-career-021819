// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42)
}

function distanceFromHqInFeet(blocks) {
    return (distanceFromHqInBlocks(blocks) * 264)
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
    distance = distanceTravelledInFeet(start, end)
    switch (true) {
        case distance <= 400:
            return 0
        case distance > 400 && distance <= 2000:
            return (distance - 400) * .02
        case distance > 2000 && distance <=2500:
            return 25
        default:
            return "cannot travel that far"
    }
}
