// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {

  return Math.abs(42 - pickUp);

}

function distanceFromHqInFeet(pickUp) {
return distanceFromHqInBlocks(pickUp)*264
}

function distanceTravelledInFeet(pickUp, dropOff) {
  return Math.abs(dropOff-pickUp)*264
}

function calculatesFarePrice(pickUp,dropOff) {
  let response;
  let distance = distanceTravelledInFeet(pickUp, dropOff);
  if (distance <= 400) {
    response = 0;
  }
  else if (distance > 400 && distance <= 2000) {
    response = (distance - 400) * 0.02;
  }
  else if (distance > 2000 && distance < 2500) {
    response = 25;
  }
  else if (distance > 2500) {
    response = 'cannot travel that far';
  }
  return response
}
