// Code your solution in this file!
function distanceFromHqInBlocks (location) {
  if (location >= 42) {
    return location - 42;
  } else {
    return -(location - 42)
  };
};

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
};

function distanceTravelledInFeet(a, b) {
  if (a >= b) {
    return (a - b) * 264;
  } else {
    return -(a - b) * 264;
  };
};


function calculatesFarePrice(a, b) {
  if (distanceTravelledInFeet(a, b) <= 400) {
    return 0;
  } else if (distanceTravelledInFeet(a, b) <= 2000) {
    return Math.round(((distanceTravelledInFeet(a, b) * .02) - 8) * 100) / 100
  } else if (distanceTravelledInFeet(a, b) <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  };
};
