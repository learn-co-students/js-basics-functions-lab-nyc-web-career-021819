// Code your solution in this file!

function distanceFromHqInBlocks(num) {
  return Math.abs(num - 42)
}

function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num)*264
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination)*264
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  switch (true) {
    case distance < 400:
      return 0;
      break;
    case distance < 2000:
      return .02*(distance-400);
      break;
    case distance < 2500:
      return 25;
      break;
    default:
      return "cannot travel that far";
      break

  }
}
