// Code your solution in this file!

function distanceFromHqInBlocks(num) {
  return Math.abs(42 - num);
}

function distanceFromHqInFeet(num) {
  let blocks = distanceFromHqInBlocks(num);
  return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
  let diff = Math.abs(start - destination);
  return diff * 264;
}

function calculatesFarePrice(start, destination) {
  let dist = distanceTravelledInFeet(start, destination);


  if (dist > 400 && dist <= 2000) {
    let rate1 = (dist - 400) * .02;
    return rate1;
  } else if (dist > 2000 && dist <= 2500) {
    return 25;
  } else if (dist > 2500) {
    return 'cannot travel that far'
  } else {
    return 0
  }

}
