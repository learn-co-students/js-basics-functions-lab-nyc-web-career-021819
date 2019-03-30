// Code your solution in this file!
function distanceFromHqInBlocks(num){
  return num >= 42 ? num - 42 : 42 - num
}

function distanceFromHqInFeet(num){
  return num >= 42 ? (num - 42) * 264 : (42 - num) * 264
}

function distanceTravelledInFeet(num1, num2) {
  if (num1 > num2){
    return (num1-num2) * 264
  } else {
    return (num2 - num1) * 264
  }
}

function calculatesFarePrice(num1, num2){
  if (distanceTravelledInFeet(num1, num2) <= 400){
    return 0
  } else if (distanceTravelledInFeet(num1, num2) <= 2000){
      return (distanceTravelledInFeet(num1, num2) * 2 - 800) / 100
  } else if (distanceTravelledInFeet(num1, num2) <= 2500){
      return 25
  } else {
    return 'cannot travel that far'
  }
}
