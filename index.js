function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(feet) {
  return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400) {
    return 0;
  } else if (400 < distance <= 2000) {
    return (distance - 400) * .02;
  } else if (distance > 2000) {
    return 25;
  } else if (distance > 2500){
    return 'Cannot travel that far';
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance > 2500) {
    return 'cannot travel that far';
  }
  else if (distance > 2000) {
    return 25;
  }
  else if (distance > 400) {
    return (distance - 400) * 0.02;
  }
  else if (distance <= 400) {
    return 0;
  }
}
