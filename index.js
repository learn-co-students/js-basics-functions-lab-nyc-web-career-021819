// Code your solution in this file!

function distanceFromHqInBlocks(block){
  if (block == 42) {
    return 0;
  } else {
    return Math.abs(block - 42);
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(starting_block, ending_block) {
  return Math.abs(ending_block-starting_block) * 264;
}

function calculatesFarePrice(starting_block, ending_block) {
  let  distance = Math.abs(ending_block-starting_block) * 264;
  if (distance > 400 && distance < 2000) {
    return (distance - 400)* 0.02
  } else if (distance >= 2000 && distance <= 2500 ) {
    return 25
  } else if (distance > 2500) {
    return 'cannot travel that far'
  } else {
    return 0;
  }
}
